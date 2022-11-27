---
layout: Post
title: "[单片机] PWM输出详解"
author: hyh
date: 2022-11-24
headerImage: https://hyh1370039199-1313349927.cos.ap-chengdu.myqcloud.com/img/202211242136558.png
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 技术笔记
  - 单片机
---

## 一、介绍

脉冲宽度调制（PulseWidthModulation，PWM）是一种对模拟信号电平进行数字编码的方法。

- PWM周期：是指信号从高电平到低电平直至再回到高电平的时间，单位为s(秒)。
- PWM频率：为PWM周期的倒数，单位为Hz(赫兹)。
- PWM占空比：一个周期内，高电平的时间与整个周期时间的比例。

![image-20221125202219902](https://hyh1370039199-1313349927.cos.ap-chengdu.myqcloud.com/img/202211252022254.png)

如图，第一个PWM波的周期为10ms，占空比为40%；第二个周期为10ms，占空比为60%；第三个周期为10ms，占空比为80%。

## 二、实现原理（以STM32为例）

