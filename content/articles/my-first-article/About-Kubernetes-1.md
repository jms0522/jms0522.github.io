---
title: " 🌟 [Kubernetes] About Kubernetes"
description: "Kubernetes에 대해."
date: "2024-08-30"
banner:
  src: "../../images/kubernetes-images/kubernetes-cover.png.png"
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
# 💬 Kubernetes 소개

![Kubernetes](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kubernetes-images/kubernetes-cover.png)

## 👑 쿠버네티스란 무엇인가?

"쿠버네티스는 컨테이너화된 워크로드와 서비스를 관리하기 위한 이식할 수 있고, 확장 가능한 오픈소스 플랫폼으로, 선언적 구성과 자동화를 모두 지원한다. 

쿠버네티스는 크고 빠르게 성장하는 생태계를 가지고 있다. 쿠버네티스 서비스, 지원 그리고 도구들은 광범위하게 제공된다."

라고 공식 페이지에 적혀있다.

컨테이너라는 기술이 도입되면서 컨테이너를 대규모로 운영하기 위해서 효과적인 관리 및 조정 방법이 필요했고 

그로 인해 쿠버네티스가 등장하게 되었다는 말이다.

![하는 일](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kubernetes-images/kubernetes-working.png)

쿠버네티스는 컨테이너 오케스트레이션 도구로, 많은 컨테이너에 있는 어플리케이션을 클러스터에서 효율적으로 관리할 수 있게 해준다.

쿠버네티스는 처음의 구글의 'Borg'라는 이름의 컨테이너 관리 기술에서 나왔으며 현재는 CNCF(Cloud Native Computing Foundation)에서 관리하고 있다.

![Borg](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kubernetes-images/borg.png)

## 📊 사용 이유

### 자동화된 운영

- 컨테이너화된 어플리케이션의 배포, 스케일링, 운영을 자동화.

### 우수한 확장성

- 수요에 따라 리소스를 동적 할당 가능.

### 이식성

- 다양한 환경에서 동일한 방식으로 배포 가능.

### 복원력

- 장애 발생시 자동으로 복구

## 🌟 쿠버네티스 배포 종류

### 관리형 쿠버네티스 

- 클라우드 서비스 제공자가 클러스터를 설치, 관리 유지보수.
- 배포와 운영에 집중 가능.
- 자동화된 업데이트, 우수한 확정성 및 안정성

•	Google Kubernetes Engine (GKE)
•	Amazon Elastic Kubernetes Service (EKS)
•	Azure Kubernetes Service (AKS)

### 설치형 쿠버네티스

- 사용자가 직접 설치하고 관리하는 방식.
- 자율적인 제어 가능
- 유연 및 클라우드 독립성

•	Rancher
•	OpenShift

### 구성형 쿠버네티스

- 환경이나 목젝에 맞게 맞춰 배포.
- 최적화 설정을 통한 효율적 구성.
- 요구사항 충족
- 부가 기능 운영을 통한 효율성 증대

•	Kubeadm