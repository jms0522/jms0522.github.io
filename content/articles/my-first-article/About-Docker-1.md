---
title: " 🚀 [Docker] About Docker"
description: "Docker 소개글입니다."
date: "2024-11-01"
banner:
  src: "../../images/docker/docker-cover.png"
  alt: "Docker"
  caption:
categories:
  - "Docker"
  - "ALL"
keywords:
  - "Pipeline"
  - "Docker"
  - "Container"
---
# 🐳 Docker

## 🔎 Overview

요즘 서비스를 컨테이너로 감싸면서 관리를 위해 쿠버네티스를 공부하고 싶은 마음이 있었는데

그 전에 docker를 완벽하게 공부하고 싶다는 생각을 하게 되었습니다.

요즘 뭔가를 배울 때 기본이 튼튼해야 한다는 생각을 많이 받아서 기초 부터 공부해겠습니다.


## 사용 이유

서비스를 제공하는 입장에서 하나의 OS에 모든 서비스를 운영하게 된다면 모종의 이유로 장애가 발생한다면

그 안에 있는 모든 서비스에 영향이 생겨 제대로 운영이 불가할 겁니다.

그래서 가상화 또는 컨테이너에 논리적인 컴퓨팅을 생성하여 독립적인 환경을 제공하여 주는데

컨테이너는 하이퍼바이저와는 달리 가상의 OS를 만들지 않고 베이스 환경의 OS를 공유하면서 필요한 프로세스만
격리하는 방식으로 보다 가볍고 속도가 빠른 장점이 있습니다.

하이퍼바이저와 달리 호스트 OS의 커널을 사용하기 때문입니다.

확장성도 우수한데 그냥 같은 이미지로 실행하여 컨테이너를 생성하면 됩니다.

더 나아가 쿠버네티스로 대량의 컨테이너들을 관리 운영도 가능합니다.

## 사용법

일단 편집 안 하고 대충 올림

OS + 구성요소 + 소프트웨어 를 압축한 파일 = 이미지

docker pull 이미지 이름 : 이미지 다운

docker run -d -p port:port


## 매타 데이터 확인

docker image inspect 이미지명: 이미지 세부 정보

docker container inspect 컨테이너명 : 컨테이너 이미지 세부 정보

docker rum --env KEy=VALUE 이미지명 : 컨테아너 실행 시 메타 데이터의 env 덮어쓰기

## 기본 사용법

docker create : 이미지를 컨테이너로 생성

docker run(start + create)

docker restart : 프로세스 재시작 

docker pause : 일시정지 (메모리에 저장)

docker unpause : 일시 정지한 시점부터 다시 시작

docker stop : 아예 멈춰버림 (메모리와 cpu 상태 종료)

docker rm -f : 실행 중 이미지 삭제

docker rm : 이미지 삭제

docker logs 컨테이너명 : 컨테이너 로그 

docker commit -m 커밋명 실행중인 컨테이너명 생성할 이미지명







