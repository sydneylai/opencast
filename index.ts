import { Elysia, t } from "elysia";
import postgres from "postgres";
import { swagger } from "@elysiajs/swagger";
import yoga from "@elysiajs/graphql-yoga";

const sql = postgres(
  "postgresql://admin:0rDgEmOqn9pTl2ld0Wg9RpCYOjwrprjd@dpg-cocoh3nsc6pc73d43el0-a.ohio-postgres.render.com/fc_qsro",
  { ssl: true }
);

const app = new Elysia().use(swagger());

async function selectCastsByFid(fid: number) {
  const rows = await sql`SELECT *
FROM casts
WHERE fid = ${fid}
AND deleted_at IS NULL;`;

  console.dir({ rows });
  return rows;
}
app
  .use(
    yoga({
      typeDefs: /* GraphQL */ `
        type Query {
          casts(userFid: Int!): [Cast!]
          hi: String
        }

        type Cast {
          id: ID!
          created_at: String!
          updated_at: String!
          timestamp: String!
          deleted_at: String
          fid: String!
          parent_fid: String
          hash: String!
          root_parent_hash: String
          parent_hash: String
          root_parent_url: String
          parent_url: String
          text: String!
          mentions: [String!]
          mentions_positions: [Int!]
        }
      `,
      resolvers: {
        Query: {
          casts: async (_parent, { userFid }) =>
            await selectCastsByFid(userFid),
          hi: () => "Hello from Opencast",
        },
      },
    })
  )
  .get(
    "/casts/:fid",
    async ({ params: { fid } }) => {
      const casts = await selectCastsByFid(fid);
      return { casts };
    },
    {
      params: t.Object({
        fid: t.Numeric(),
      }),
    }
  );

app.listen(8080, () =>
  console.log("Elysia server running on http://localhost:8080")
);
