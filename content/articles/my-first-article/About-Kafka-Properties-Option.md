---
title: " 🚀 [Kafka] About Kafka Kraft-Properties "
description: "Kafka 간단한 소개글입니다."
date: "2024-10-29"
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
  - "Kraft"
---
# 🚀 Apache Kafka KRaft Properties Option

오늘은 굉장히 피곤한 관계로 간단하게 Broker, Controller의 properties option을 살펴 보겠습니다.

KRaft 모드에선 server.properties를 설정 할 필요가 없는데요.

Broker는 broker.properties로 Controller는 controller.properties로 실행하면 되기 때문이죠.

하지만 그 외 플러그인이나 추가 서비스를 연결 한다고 하면 server.properties도 수정하면 되겠습니다.

오늘은 broker와 contorller의 주요 옵션만 빠르게 확인 하겠습니다.

---

# Broker Properties (broker.properties)

## 브로커 설정 파일인 broker.properties는 메시지의 전송, 저장 및 네트워크 동작을 관리합니다.

### 필수 옵션

	•	node.id: 브로커의 고유 ID를 지정합니다. 클러스터 내에서 각 브로커는 고유한 ID를 가져야 합니다.
	
    •	process.roles: 브로커 역할을 지정합니다. 이 옵션은 broker로 설정합니다.
	
    •	listeners: 브로커가 요청을 수신할 주소와 포트를 지정합니다. 예를 들어 PLAINTEXT://:9092로 설정할 수 있습니다.
	
    •	log.dirs: 메시지 로그 데이터를 저장할 디렉토리를 지정합니다.
	
    •	metadata.quorum.listeners: 메타데이터 관리를 위해 컨트롤러와 통신할 IP 및 포트를 지정합니다.
	
    •	controller.listener.names: 브로커가 컨트롤러와 통신할 때 사용할 listener 이름을 지정합니다.
	
    •	inter.broker.listener.name: 브로커 간 통신에 사용할 listener 이름을 지정합니다.

### 선택 옵션

	•	num.network.threads: 네트워크 요청을 처리하는 쓰레드 수를 설정합니다. 기본값은 3입니다.

	•	num.io.threads: I/O 요청을 처리하는 쓰레드 수를 설정합니다. 기본값은 8입니다.

	•	socket.send.buffer.bytes: 소켓 송신 버퍼 크기 설정입니다. 기본값은 100KB입니다.

	•	socket.receive.buffer.bytes: 소켓 수신 버퍼 크기 설정입니다. 기본값은 100KB입니다.

	•	log.segment.bytes: 세그먼트 파일의 최대 크기입니다. 기본값은 1GB입니다.

	•	log.retention.hours: 로그 보관 시간입니다. 기본값은 168시간 (7일)입니다.

	•	log.retention.bytes: 로그 보관 용량의 최대 크기입니다.
	
    •	auto.create.topics.enable: 새로운 주제를 자동으로 생성할지 여부를 설정합니다. 기본값은 true입니다.
	
    •	num.partitions: 새로 생성되는 주제의 기본 파티션 수를 설정합니다. 기본값은 1입니다.

# Controller Properties (controller.properties)

## 컨트롤러 설정 파일인 controller.properties는 클러스터의 메타데이터 관리와 브로커 조정을 담당합니다.

### 필수 옵션

	•	node.id: 컨트롤러의 고유 ID를 지정합니다. 각 컨트롤러는 클러스터 내에서 고유한 ID를 가져야 합니다.
	
    •	process.roles: 컨트롤러 역할을 지정합니다. 이 옵션은 controller로 설정합니다.
	
    •	controller.quorum.voters: 컨트롤러 선출 과정에 참여하는 모든 컨트롤러의 ID와 주소를 지정합니다. 
        
        예를 들어 0@localhost:9093,1@localhost:9094와 같이 설정합니다.
	
    •	listeners: 컨트롤러가 다른 노드와 통신할 때 사용할 주소와 포트를 지정합니다.
	
    •	listener.security.protocol.map: listener 이름에 따른 보안 프로토콜을 설정합니다. 예: CONTROLLER:PLAINTEXT.

### 선택 옵션

	•	controller.metadata.log.dirs: 메타데이터 로그 저장 경로를 지정합니다.
	
    •	controller.request.timeout.ms: 컨트롤러 요청에 대한 타임아웃 시간(ms)을 지정합니다.
	
    •	controller.heartbeat.interval.ms: 컨트롤러 간 하트비트 주기(ms) 설정입니다.
	션
    •	controller.heartbeat.timeout.ms: 컨트롤러 간 하트비트 타임아웃 시간 설정입니다.
	
    •	controller.threads: 메타데이터 업데이트 작업을 수행하는 쓰레드 수를 지정합니다. 기본값은 1입니다.

### 기타 보안 및 네트워크 옵션

	•	ssl.endpoint.identification.algorithm: SSL 엔드포인트 확인 알고리즘을 설정합니다. 기본값은 https입니다.
	
    •	security.inter.broker.protocol: 브로커 간 통신에서 사용할 보안 프로토콜을 설정합니다.
	
    •	sasl.mechanism.inter.broker.protocol: SASL 인증 방식 설정입니다.

---

### 마무리

필수 옵션은 당연히 지정을 해야하고 더 많은 선택 옵션들을 어떻게 지정하냐에 따라 클러스터의 성능 및

처리하고자 하는 데이터에 맞는 구현이 가능합니다.

'데이터 처리량' 이 하나도 늘리는데 굉장히 많은 방법이 있어, 찾아보면서 공부를 해봐야겠습니다..

요즘 회사 때문에 정신이 없네요..

그럼 이만..😢