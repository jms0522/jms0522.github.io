---
title: " 🌟 [Kubernetes] About Kubernetes-2"
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

# ⚒️ Kubernetes 주요 Object

### 1. **Pod**

![pod](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kubernetes-images/pod.png)

- Kubernetes에서 가장 작은 배포 단위로, 하나 이상의 컨테이너를 포함.
- 한 개 이상의 컨테이너, 스토리지, 네트워크 속성.
- 하나의 컨테이너를 사용하더라도 pod로 관리. 

### 2. **Service**

- Pod 집합을 네트워크로 노출.
- Pod 끼리의 연결이나 외부에서 접근할 시.

### 3. **Deployment**

![Deployment](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kubernetes-images/deployment.png)

- Pod의 배포 및 관리를 담당, 롤링 업데이트 및 롤백을 지원.
- Pod을 여러 개(한 개 이상) 복제하여 관리하는 오브젝트.

### 4. **ReplicaSet**

- 특정 수의 동일한 Pod를 유지하여 애플리케이션 가용성을 보장.

### 5. **StatefulSet**

- 상태를 가진 애플리케이션을 위한 리소스, 각 Pod는 고유한 ID를 소유.

### 6. **DaemonSet**

- 클러스터 내 모든 노드에서 특정 Pod를 실행하도록 합니다.

### 7. **Job 및 CronJob**

- Job은 일회성 작업을, CronJob은 주기적으로 실행되는 작업을 관리.

### 8. **ConfigMap 및 Secret**

- 애플리케이션 설정과 민감한 데이터를 안전하게 관리.

### 9. **Ingress**
- 외부 트래픽을 클러스터 내부의 서비스로 라우팅.

### 10. **PersistentVolume 및 PersistentVolumeClaim**

- Pod가 종료되어도 데이터가 유지되는 영구적인 스토리지를 제공.

### 11. **Namespace**

- 클러스터 내 리소스를 논리적으로 분리하여 관리.

### 12. **ResourceQuota**

- 특정 Namespace 내에서 사용할 수 있는 리소스의 양을 제한.




## Helm이란?
Helm은 Kubernetes에서 애플리케이션을 패키징하고 관리하는 도구입니다. "차트(Chart)"라는 형태로 애플리케이션을 정의하고, 쉽게 배포 및 관리할 수 있도록 돕습니다.

## Manifest 파일이란?
Manifest 파일은 Kubernetes 오브젝트를 정의하는 YAML 또는 JSON 형식의 파일입니다. 이를 통해 애플리케이션을 코드로 정의하고, `kubectl` 명령어로 클러스터에 적용할 수 있습니다.

## Kubernetes의 중요 개념 및 추가 정보

### 1. **컨트롤 플레인 (Control Plane)**
- **역할**: Kubernetes 클러스터의 상태를 전반적으로 관리하는 역할을 합니다.
- **구성 요소**: API 서버, etcd, 컨트롤러 매니저, 스케줄러 등이 포함됩니다.
- **중요성**: 컨트롤 플레인은 클러스터 내에서 모든 작업을 조정하고, 각 오브젝트의 상태를 모니터링하여 지정된 상태를 유지합니다.

### 2. **노드 컴포넌트 (Node Components)**
- **구성 요소**: 각 워커 노드에서 실행되는 kubelet, kube-proxy, 컨테이너 런타임 등이 포함됩니다.
- **역할**: 실제 애플리케이션 컨테이너를 실행하고 관리하는 역할을 담당합니다.

### 3. **자동화와 셀프 힐링 (Self-Healing)**
- **자동화**: Kubernetes는 배포, 업데이트, 스케일링 작업을 자동으로 처리할 수 있습니다.
- **셀프 힐링**: 장애가 발생한 파드를 자동으로 재시작하거나, 필요에 따라 새로운 노드에 파드를 재배치하여 서비스 가용성을 유지합니다.

### 4. **스케일링과 로드 밸런싱**
- **자동 스케일링**: Kubernetes는 애플리케이션의 부하에 따라 파드 수를 자동으로 조정할 수 있습니다.
- **로드 밸런싱**: 서비스의 트래픽을 여러 파드에 분산시켜 부하를 균등하게 유지합니다.

### 5. **클라우드 네이티브와 이식성**
- Kubernetes는 여러 클라우드 제공자와 온프레미스 환경에서 동일한 방식으로 운영할 수 있는 이식성을 제공합니다. 이를 통해 특정 클라우드 제공자에 종속되지 않고 자유롭게 클러스터를 배포하고 관리할 수 있습니다.

### 6. **보안 관리**
- Kubernetes는 네트워크 폴리시, 역할 기반 접근 제어(RBAC), 시크릿 관리 등을 통해 보안성을 강화합니다. 이러한 기능을 통해 애플리케이션과 데이터를 안전하게 보호할 수 있습니다.

## 결론
Kubernetes는 컨테이너화된 애플리케이션을 관리하기 위한 필수 도구로, 자동화, 확장성, 이식성 등 다양한 장점을 제공합니다. Helm과 Manifest 파일을 활용해 애플리케이션의 배포와 관리를 더욱 효율적으로 수행할 수 있으며, Kubernetes의 주요 오브젝트와 개념을 이해하는 것이 클러스터 운영의 핵심입니다.