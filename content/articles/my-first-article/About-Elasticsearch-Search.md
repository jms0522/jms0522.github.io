---
title: " 🌟 [Kubernetes] About Kubernetes"
description: "Kubernetes에 대해."
date: "2024-08-30"
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

### 쿠버네티스 컴포넌트

![Kubernetes](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kubernetes/image.png)

* API server, etcd, Controller Manager, Scheduler는 마스터 노드 서버
* Kubelet, Container Runtime은 각 노드 서버

1. 사용자가 Api Server에 매니패스토(주문서) 파일 전달
2. Api Server는 etcd 저장소에 매니패스토 파일 저장
3. watch 매커니즘으로 controller\_manager가 매니페스토 파일의 변화를 감지하고 배포를 위한 추가적인 metadata (ReplicaSet, Pod)를 더해서 매니페스토 파일을 수정
4. Scheduler가 각 노드 리소스를 확인한 뒤, 배포할 노드를 지정
5. 노드가 지정이 완료되면 각 노드의 Kubelet이 컨테이너를 생성
6. Kubelet이 Container Runtime에게 작업을 지시 및 정기적으로 상황 보고

***

Controller Manager안에는 여러 Controller들이 존재

![Kubernetes](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kubernetes/image2.png)

* 이벤트 종류에 따라 맞는 컨트롤러들이 이벤트를 처리
