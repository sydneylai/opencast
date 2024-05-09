# Opencast
Open-source indexer for Farcaster apps and frames

### What does Opencast do? 

Query data from [Farcaster](https://github.com/farcasterxyz/protocol#4-hubs) hubs/nodes

## Product Description:

###  Painpoints we are solving for
1. Platforms like Naynar have limitations and are closed platforms
Solution: Create queries that is not possible 
    - "what's the best time of day to cast?"
    - "what's my best performing cast?"
2. Data uptime and paywall
Solution: own your own data, don't need to trust Neynar or other hubs

### Unique features:
1. Client-side is interoperable and agnostic
2. Querying data from nodes and protocol
3. Expansive querying capabilities (this is a future version release)

### Target Audience: (Who is this product designed for?)

Short Term: Devs operating their own hub (nodes), building a client-side needing to query data

Long Term: Builders who no longer need to run their own hub



## MVP function:

### What will users be able to do with it?
Interact with the backend, and run custom queries. The demo we will showcase the back-end capabilities as well as some client-side examples

## Architecture:

Languages: GraphQL, Shuttle, Elysia, Bun

## Client-Side (App/Website):

Opencast is client-side app agnostic and can be accessed locally as a developer tool.   

### What will users see and how will they interact with it?

- series of feature end-points
- devs building an application built on querying Farcaster


## Toolings:
Sentry https://sentry.io/for/error-monitoring/
Shuttle https://socket.dev/npm/package/@farcaster/shuttle
Neynar clone(?): https://github.com/dylsteck/litecast or [[link]](https://github.com/search?q=%22Neynar%22%20client%20OR%20clone%20OR%20sdk%20OR%20library&type=repositories)


](https://github.com/dawsbot/opencast/compare/master...sydneylai:opencast-1:patch-1)
