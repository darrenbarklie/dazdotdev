---
layout: '../../layouts/Layout.astro'
title: 'Understanding Architecture Strategies for SaaS Web Applications'
description: "The requirement for building services with access to resources isolated by customer requires careful consideration."
date: '2022-08-20'
---

<article class="prose prose-base">

## Introduction

My experience as a frontend developer mostly has me focused on delivering a consistant user experience to a single user. In extending into designing and building web applications, the requirement to understand a multi-tenecy setup was growing in weight.

In researching Backend as a Service offerings, I landed on [this supabase issue](https://github.com/supabase/supabase/discussions/1615), which sent me on the right path to strengthen my foundational knowledge.

This blog post summarises my learning from a series of articles published by Microsoft in 2006 to demystify the Software as a Service (SaaS) model:

1. [Architecture Strategies for Catching the Long Tail](https://web.archive.org/web/20080510114812/http://msdn.microsoft.com/en-us/library/aa479069.aspx), April 2006, Frederick Chong and Gianpaolo Carraro
Microsoft Corporation
2. [Multi-Tenant Data Architecture](https://web.archive.org/web/20080510114523/https://msdn.microsoft.com/en-us/library/aa479086.aspx), June 2006, Frederick Chong, Gianpaolo Carraro, and Roger Wolter
Microsoft Corporation



## Software as a Service Summary

  Definded as:
> "Software deployed as a hosted service and accessed over the Internet."

While this broadstroke definition isn't immediately useful to a developer or architect, definining key attributions and two major categories help us begin to classify the SaaS model. 

Key attributes are profiled as:
- configurability
- multi-tenant efficiency
- scalability

Two major categories are presented as:
- **line of business services**: Offered to enterprises and organisations to facilitate business processes (i.e. finances, inventory control, marketing), typically sold on subscription basis
- **consumer-oriented services**: Offered to general public as consumer service, typically sold on subscription basis, but can leverage freeium or advertising models

Three areas that require strategy synergy to accomodate the SaaS model are:
- Business model
- Application architecture
- Operational structure

## SaaS Business model

A traditional IT company might have budgeted for software, hardware and professional services in approximately equal portions. However a business chiefly relying upon SaaS products to fulfil its business can expect software subscriptions to dwarf hardware and services costs.

Hardware is relegated to a "means to an end" to access mostly self-serving cloud-based SaaS platforms. Economy of Scale is therefore leveraged, as infrastructure, hardware, services and specialist staff resourcing is centralised, optimised and accomodating of new "[long tail](https://www.wired.com/2004/10/tail/)" business opportunities.

## SaaS Application architecture

A well architected SaaS application is:
- **scalable**: Maximising concurrency and using application resources effeciently, pooling resources, caching data, and partioning databases
- **multi-tenant-efficient**: An application instance may accommodating hundreds of other companies, all unbeknowst to any of the users.
- **configurable**: Given the shared codebase, customising the application is achieved through metadata, configuration and plugin patterns, limiting development and operational costs to deliver per constomisation.

> "Multi-tenancy may be the most significant paradigm shift that an architect accustomed to designing isolated, single-tenant applications has to make."

### SaaS Maturity Model

There are four levels of application maturity that layer in the attributions indentified above:
1. **Level I: Ad Hoc/Custom**: Traditional offering, with each customer reciving their own bespoke hosted and individually configurted application, hosted on individual hardware. Vendors might reduce costs by leveraging Infrastructure as a Service.
2. **Level II: Configurable**: Vendor hosts a seperate instance for each customer/tenant, but shares the same code implementation. Unique requirements are achieved through configuration patterns. Requires sufficient hardware and storage to facilitate mulitple concurrent instances.
3. **Level III: Configurable, Multi-Tenant-Efficient**: A single instance serves every customer, with metadata providing user experience and functional variances. Authorisation and security policies ensure users don't perceive shared tenancy. Benefits include effecient computing resources, although at the cost of scalability, unless database partioning manages storage performance.
4. **Level IV: Scalable, Configurable, Multi-Tenant-Efficient**: Multiple hosts share load-balanced farm of ideentical instances, with siloed data and configurable metadata. Scalable to an arbitary number of users based on demand, capable of rolling out fixes, changes and features easily.

Choosing a maturity level requires consideration for the business model (costs, legal, culture), architectural model (desktop migration vs net-native) and operational model (SLAs, downtime, disaster recovery).






## SaaS Operational Structure

...

https://www.datamation.com/cloud/what-is-multi-tenant-architecture/


https://aws.amazon.com/blogs/database/multi-tenant-data-isolation-with-postgresql-row-level-security/

https://supabase.com/blog/supabase-auth#policies

https://www.postgresql.org/docs/current/ddl-rowsecurity.html





</article>