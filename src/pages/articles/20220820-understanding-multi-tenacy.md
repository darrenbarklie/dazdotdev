---
layout: '../../layouts/Layout.astro'
title: 'Understanding Web Application Multi-Tenant Data Architecture'
description: "The requirement for building services with access to resources isolated by customer requires careful consideration."
date: '2022-08-20'
---

<article class="prose prose-base">

## Introduction

During the designing and building of a web application for a client, the complexity has...

My experience as a frontend developer mostly has me focused on delivering a consistant user experience to a single user.

Since moving into web application architecture, the requirement to understand a multi-tenecy setup was growing in weight. In researching Backend as a Service offerings, I landed on [this supabase issue](https://github.com/supabase/supabase/discussions/1615), which sent me on the right path to strengthen my foundational knowledge.


## Software as a Service Summary

Series of articles published by Microsoft in 2006 to demystify the Software as a Service (SaaS) model.  Definded as:
> "Software deployed as a hosted service and accessed over the Internet."

While this broadstroke definition isn't immediately useful to a developer or architect, definining key attributions and two major categories help us begin to classify the SaaS model. 

Key attributes are profiled as:
- configurability
- multi-tenant efficiency
- scalability

Two major categories are presented as:
- **line of business services**: offered to enterprises and organisations to facilitate business processes (i.e. finances, inventory control, marketing), typically sold on subscription basis
- **consumer-oriented services**: offered to general public as consumer service, typically sold on subscription basis, but can leverage freeium or advertising models

Three areas that require strategy synergy to accomodate the SaaS model are:
- Business model
- Application architecture
- Operational structure

## SaaS Business model

A traditional IT company might have budgeted for software, hardware and professional services in approximately equal portions. However a business chiefly relying upon SaaS products to fulfil its business can expect software subscriptions to dwarf hardware and services costs.

Hardware is relegated to a "means to an end" to access mostly self-serving cloud-based SaaS platforms. Economy of Scale is therefore leveraged, as infrastructure, hardware, services and specialist staff resourcing is centralised, optimised and accomodating of new "[long tail](https://www.wired.com/2004/10/tail/)" business opportunities.

## SaaS Application architecture

...

- scalable
- multi-tenant-efficient
- configurable


## SaaS Operational Structure

...

---

1. [Architecture Strategies for Catching the Long Tail](https://web.archive.org/web/20080510114812/http://msdn.microsoft.com/en-us/library/aa479069.aspx), April 2006, Frederick Chong and Gianpaolo Carraro
Microsoft Corporation
2. [Multi-Tenant Data Architecture](https://web.archive.org/web/20080510114523/https://msdn.microsoft.com/en-us/library/aa479086.aspx), June 2006, Frederick Chong, Gianpaolo Carraro, and Roger Wolter
Microsoft Corporation

--- 

https://aws.amazon.com/blogs/database/multi-tenant-data-isolation-with-postgresql-row-level-security/

https://supabase.com/blog/supabase-auth#policies

https://www.postgresql.org/docs/current/ddl-rowsecurity.html





</article>
