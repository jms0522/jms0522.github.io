---
title: " 🌟 [Kubernetes] 컨트롤플레인 "
description: "Kubernetes에 대해."
date: "2024-08-31"
banner:
    src: "../../images/kubernetes-images/kubernetes-cover.png"
    alt: "Kubernetes"
    caption: 'Photo by <u><a href="https://kubernetes.io/ko/docs/concepts/overview/">About Kuberbnetes</a></u>'
categories:
    - "Kubernetes"
    - "ALL"
keywords:
    - "Container"
    - "Blog"
    - "Kubernetes"
---

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kubernetes-images/cluster.png" alt="Kubernetes cluster" width="600" />

# 쿠버네티스 핵심인 _컨트롤 플레인_ 에 대해

-   '마스터 노드' 라고 불리는 컨트롤 플레인은 쿠버네티스의 모든 데이터를 관리하며 2가지 중요한 특징이 존재

## 2가지 특징

### 1\. Hub and Spoke 패턴

### 2\. 선언적 동작 방식

## Hub and Spoke

-   중앙 허브가 여러 Spoke를 연결하여 조정하는 형태
-   쿠버네티스에서는 컨트롤플레인이 중앙 허브가 되어 여러 컴포넌트(Spoke)들을 관리
-   유지 관리가 용이하고, 확장성이 높다는 장점이 있지만 중앙 허브가 장애가 발생 시 전체 네트워크가 장애 발생

### 쿠버네티스 Hub and Spoke

각 컨포넌트(어플리케이션) 은,는 서로 통신을 하지 않고 컨트롤플레인 (API Server)를 통해 통신을 진행

1. 사용자가 API Server에게 원하는 것을 주문 (배포 등등)
2. API Server는 주문 사항을 etcd 저장소에 저장
3. 주문서 (매니패스토 파일) 가 변경 될 때 마다 API Server는 주변 컴포넌트에게 전달

### 쿠버네티스 선언적 동작 방식

_선언적 동작 방식이란?_

사용자가 원하는 상태를 전달하고 쿠버네티스는 그 상태를 맞추기 위해 노력하는 방식

### Watch 매커니즘

-   쿠버네티스에서 매니패스토(주문서)가 변경이 된다면 API Server는 변화를 빠르게 주변 컴포넌트에게 전달
-   컴포넌트들이 매니패스토 파일의 변경 사항을 스트리밍으로 수신할 수 있게 하고 API Server에 요청 할 때, resourceVersion이라는 값을 같이 보내서 이 버전 이후 변경 사항만 보내달라는 싸인을 보냄
