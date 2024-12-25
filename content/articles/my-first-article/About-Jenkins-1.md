---
title: " 💬 [Jenkins] About Jenkins Pipeline"
description: "Jenkins 간단한 소개글입니다."
date: "2024-12-24"
banner:
  src: "../../images/jenkins/jenkins-cover.png"
  alt: "Jenkins"
  caption: 
categories:
  - "Jenkins"
  - "ALL"
keywords:
  - "Jenkins"
  - "Pipeline"
  - "CI/CD"
---

# Jenkins 

회사에서 Jenkins를 통한 자동화에 대해서 진행하고 있습니다.

개발자들이 코드를 작업하고 병합하는 과정에 문제를 일으킬 가능성이 높고, 

배포하는 과정도 상당히 귀찮아서 자동화 시스템으로 이를 간편하게 관리하려고 합니다.

나중에 서비스들을 쿠버네티스로 관리를 하더라도 쿠버네티스에도 Jenkins를 통해서 배포가 가능하기 때문이기도 합니다.

# Jenkins Pipeline

젠킨스는 파이프라인이라는 플러그인으로 손 쉽게 CI/CD를 구축할 수 있습니다.

추천 플러그인 설치를 하면 아마 자동으로 설치가 되어있을텐데 그게 아니라면 플러그인에서 설치를 해주시면 됩니다.

기본적으로 포트 변경을 하지 않았다면 8080번 포트에 젠킨스가 돌아갈텐데 8080번 포트는 변경하는 걸 추천드립니다.

IP:8080번 포트로 들어가면 젠킨스가 떠 있을텐데 저는 새로운 item에서 pipeline을 선택해서 생성하였습니다.

기본적으로 여러가지 옵션들이 있습니다.

git을 사용하느냐 생성된 산출물을 얼마나 많이 얼마나 보관할 지, 어떤 방식으로 트리거를 할 지 선택을 해주시면 됩니다.

이 부분은 따로 포스팅을 할 예정입니다.

# Pipeline 스크립트 생성

파이프라인에는 Declaratives 문법과 Script 문법이 있는데 , 이 또한 둘의 장단점이 있습니다.

이것도 따로 포스팅 할게요.

저는 Declaratives 문법을 통해서 커밋이 들어오면 (변경 감지)를 하면 원하는 서버에서 실행을 하고 테스트를 하는 스크립트를 

작성하였습니다.

![Pipeline](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/jenkins/jenkins-pl.png)

![result](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/jenkins/success.png)


- 스크립트는 groovy문법으로 작성하는 거 같은데 생각보다 어렵진 않았습니다.


