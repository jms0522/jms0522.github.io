---
title: " 🌟 [Terraform] About Terraform"
description: "Terraform 에 대해."
date: "2024-09-02"
banner:
  src: "../../images/terraform-images/cover-t.png"
  alt: "Kubernetes"
  caption: 'Photo by <u><a href="https://developer.hashicorp.com/terraform/docs">Terraform Docs</a></u>'
categories:
  - "Terraform"
  - "ALL"
keywords:
  - "Blog"
  - "Terraform"
  - "Provisioning"
---
# 💬 Terraform 에 대해 알아보자!

![Terraform](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/terraform-images/cover-t.png)

각각의 EC2에 하듑 네임노드와 데이터노드를 구성하다, 각기 다른 EC2나 인프라에서 환경 구축을 어떻게 간결하고 일관성 있게 관리하는지 궁금해졌다.

그러다 terraform 이란 기술로 인프라를 코드로 정의하고 관리할 수 있다는 걸 알게 되어 한 번 사용해봤다.

## 📌 Terraform이란?

Terraform은 HashiCorp에서 개발한 오픈 소스 인프라 관리 도구로, 인프라를 코드로 정의하고 관리할 수 있게 해준다. 

이를 통해 클라우드 환경(AWS, Azure, GCP 등)이나 온프레미스 환경에서 서버, 네트워크, 데이터베이스 등의 인프라를 자동으로 배포하고 관리할 수 있다.


### ✓ Terraform의 장점은?

- **자동화** : 코드를 통해 자동으로 배포 관리가 가능하다.
- **일관성** : 코드를 통해 정의함으로 동일한 환경을 반복적으로 생성 가능.
- **재사용성** : 복잡한 인프라를 모듈을 통해 쉽게 재사용 가능.
- **다양한 클라우드 지원** : 여러 클라우드와 온프레미스 환경을 관리 가능.



## 🔨 작업 순서

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/terraform-images/working.png" alt="Terraform working" width="700" />

### 1. 프로젝트 초기화 (terraform init)

- 디렉토리 초기화 및 필요한 플러그인 다운로드.
- terraform 설정 기반, 필요한 모든 종속성을 설정.

### 2. 코드 작성 (tf 파일)

- 코드로 인프라 정의.
- 리소스, 변수, 출력 등이 포함.

### 3. 계획 (terraform plan)

- 작성한 코드의 변경 사항 미리 확인.
- 실제 인프라가 변경 되는 건 아님 (어떤 변화가 일어날지 미리 확인 가능)

### 4. 적용 (terraform apply)

- 실제로 인프라를 배포, 변경사항 적용.
- plan에서 확인한 내용을 바탕으로 수정 및 삭제 등등..

### 5. 변경 (terraform apply)

- 인프라 변경이 필요 시 코드 수정 반영.
- 코드의 차이만 적용.

### 6. 제거 (terraform destroy)

- 인프라 제거 필요시 terraform destroy 명령어 입력
- 모든 리소스를 삭제, 클린업 수행.


## 📚 참고자료

[Terraform 공식 문서](https://developer.hashicorp.com/terraform/docs)

[HashiCorp Learn](https://developer.hashicorp.com/terraform/tutorials)