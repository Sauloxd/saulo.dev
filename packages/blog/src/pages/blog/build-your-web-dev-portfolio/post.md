---
title: "How to prepare the ground for your web development portfolio!"
date: "2020-05-01"
description: |
  In this tutorial, I will try to share the steps used to build this website!
  This is manily focused on static apps, manually written HTML, SPA or a SSG (such as this blog!)
  Basically we will buy a domain, hack our way to have an email associated with this domain so we can confirm our HTTPS certificates, configure a S3 bucket to hold our static files, and configure Cloudfront to serve everything!

tags:
  - AWS
  - Deploy
  - Statis Apps
---

# Build your portfolio under your domain

## What's next?
Let's show the world the things you create!

Part of the fun in coding is showing the world what you believe to be useful ([JSON prettify](https://codebeautify.org/jsonviewer)) or just fun ([puddin](http://www.pudim.com.br/), [birthday-js](https://nullprogram.com/birthday-js/?1993-12-4)). It amazes me how creative and light-spirited our generation of devs are.

That's why, a lot of services exist today just to easy this type of flow, from code to production with the least friction possible!

[https://app.netlify.com/](https://app.netlify.com/)

[https://surge.sh/](https://surge.sh/)

[https://pages.github.com/](https://pages.github.com/)

As much as I love the practical usage of those kinds of services, the other part of the fun in coding is learning**.** Ever wondered how to get from buying a domain, to actually having an app under it? Wanna know the practical difference between [`www.yourdomain.com`](http://www.yourdomain.com) and `yourdomain.com`? We will also take one step further and secure our website with HTTPS (powered by AWS) and even set up an email under the domain! Impress your friends by sending them a `hello` in your new email!

Buying a domain and using AWS  may cost a couple of bucks... And if you don't know AWS, that's an excellent side-project to work on to get started!

note: It's possible to set alarms in AWS billing settings so it notifies you when you're reaching your limit. It's a good idea to set a limit like USD 2.00 in case you accidentally expose your KEYS and hackers start mining bitcoins with your money

## So, what's the plan?

- Buy a domain
- Email configuration with least effort possible so we can get our https certificate from it
- Emit certificate (HTTPS) under ACM (Amazon Certificate Manager) to your domain
- Prepare a location (S3) to host our app static files
- Configure a CDN (CloudFront) to propagate your bucket files through the edges of the world (optional but recommended!)

### Domain

Let's buy a domain from whatever `domain names registrar` you want (N[amecheap](https://namecheap.com), [domain.com](https://www.domain.com/), [for BRs out there](https://br.godaddy.com/), [FREE ALTERNATIVE](https://www.freenom.com/)). I'll be using Namecheap to set things up, but the concepts are the same, so no worries if you bought that sweet domain in a promotion from another registrar.

- Tip: Want a FREE domain and with EMOJI? Follow this guide: [https://dev.to/bauripalash/how-can-you-get-your-own-emoji-domain-for-free-5e9c](https://dev.to/bauripalash/how-can-you-get-your-own-emoji-domain-for-free-5e9c)


### Request a certificate for HTTPS

If you don't have a AWS account, go ahead and create one! Then, go to [AWS Console](https://console.aws.amazon.com/) and find the Certificate Manager Service.

![Click on 1 then search for certificate under 2](./acm-find.png)
