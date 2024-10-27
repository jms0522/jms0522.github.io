---
title: " 🚀 [Kafka] About Kafka KRaft-Cluster "
description: "Kafka KRaft 소개글입니다."
date: "2024-10-27"
banner:
  src: "../../images/kafka/kafka.png"
  alt: "Kafka"
  caption:
categories:
  - "Kafka"
  - "ALL"
keywords:
  - "Pipeline"
  - "Kafka"
  - "KRaft"
---
# 🚀 Apache Kafka KRaft Cluster

오늘은 Kafka의 KRaft Cluster 구성에 대해서 공부했습니다.

KRaft 모드에서 클러스터로 실행하기 위해 설정을 할 필요가 있는데 무엇인지 왜 인지 알아보겠습니다.

## 컨트롤러와 브러커 역할을 정하기

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kafka/controller.png" alt="Controller" width="600" />

**controller.properties, broker.properties** 에서 **process.roles**에서 **contorller**나 **broker**로 역할을 지정합니다.

KRaft 모드에서는 각 노드는 고유한 아이디를 가져야 합니다.

**node.id**에서 1,2,3,4 번 등 각 번호를 지정합니다.

**controller.quorum.voters**=1@ip:9093, 2@ip:9093에서는 컨트롤러를 지정합니다.

지정한 node.id@ip:port 로 구성합니다.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kafka/broker.png" alt="Broker" width="600" />

broker도 마찬가지입니다.

**controller.quorum.voters** 는 마찬가지로 컨트롤러로 지정하고 브로커는 역할에 broker로 지정해줍니다.

## Storage 포맷하기

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kafka/controller.png" alt="Controller" width="600" />

Kafka KRaft 모드로 실행하기 위해선 클러스터 내의 스토리지를 모두 포맷을 해줘야 합니다.

그 이유는 클러스터에 참여하는 모든 브로커가 동일한 메타 데이터 구조를 가져야 하기 때문입니다.

kafka-storage 스크립트를 활용해서 포맷을 할건데 그 전에!

모든 같은 값으로 포맷을 해주기 위해선 같은 포맷 키 값이 필요하고 randon uuid를 통해 생성해줍니다.

그리고 그렇게 생성된 키값을 가지고 foramt -t 를 이용하여 값은 키값으로 포맷을 해줘야합니다.

왜 그러냐 하면 포맷 키는 동일한 클러스터에 속함을 보장하기 때문입니다.

다른 키 값으로 포맷을 진행 할 시, 같은 클러스터로 인식하지 못합니다.

## Topic 생성

컨트롤러 2개 브로커 2개로 구성을 하셨다면 토픽을 생성하여 데이터를 받을 준비를 하실텐데

topic은 broker에서 밖에 생성하지 못합니다.

컨트롤러는 메타데이터를 관리, 브로커 상태 점검 등 다른 역할을 하기에 토픽 생성은 브로커에서만 가능합니다.

## Linux 자동 실행

저는 EC2에서 ubuntu로 실행을 하였는데요. 각각 4개의 서버

저는 Linux system을 통해 자동실행을 설정했습니다.

여기서 중요한 점은 자동실행이 시작될 때 컨트롤러가 브로커보다 먼저 실행이 되어야 한다는겁니다.

클러스터가 시작될 때 브로커가 컨트롤러에게서 메타데이터를 가져와야 하는데 

실행이 같이 된다거나 좀 늦던가 하면 실행이 제대로 되지 않습니다.

그래서 저는 script를 새로 생성을 했습니다.

start-broker-after-controller.sh를 생성했는데요

내용은 간단합니다.

"controller가 실행되어 있는 걸 확인 후에 broker.properties를 실행하라고 했습니다."

그리고 이제 service 파일로 생성을 한 후 각각 자동실행이 되도록 설정하면 되는데요

브로커에서만 컨트롤러에 의존성이 있기 때문에 브로커만 제가 만든 sh 파일로 실행을 하면 됩니다.

## 느낀점

KRaft 모드를 실행할 때 많은 옵션의 조정이 필요 한 건 아니지만, 이해를 제대로 하고 하는 것과

그냥 docker-compose up -d를 해서 무지성으로 하는 것과 많이 다른 걸 느꼈습니다.

각각의 properties에 있는 옵션들도 모두 잘 확인할 필요가 있다고 느낍니다.

특히 로그 파일 쌓이는 위치를 바꿔서 실제 메시지 데이터를 누가 만들고 관리하는지,

운영 데이터도 마찬가지로 위치를 지정해서 확인하고 관리 하는 것도 필요할 거 같습니다.

사실 글이 너무 두서 없는데요, 정확한 정보는 찾아보시길 추천드립니다.






