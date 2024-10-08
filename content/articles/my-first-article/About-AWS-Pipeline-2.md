---
title: " 🔫 AWS Pipeline 구축 실습 - 1 "
description: "AWS 기능들을 활용하여 파이프라인 구축해보기"
date: "2024-09-12"
banner:
  src: "../../images/aws/aws-cover.png"
  alt: "AWS"
  caption: 'Photo by <u><a href="https://docs.aws.amazon.com/">AWS docs</a></u>'
categories:
  - "AWS"
  - "Streaming"
  - "ALL"
keywords:
  - "Pipeline"
  - "AWS"
  - "Cloud"

---
# ☁️ AWS 에서 Pipeline 구축 실습을 해보자 - 1  

오늘은 간단한 AWS pipeline을 구축해보겠습니다.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/aws-practice-1/workflow.png" alt="Component" width="650" />

실습의 목적은 로우 데이터의 추출, 변환, 적재입니다.

참고한 내용은 [AWS workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/44c91c21-a6a4-4b56-bd95-56bd443aa449/en-US/lab-guide/ingest)에서 보실 수 있습니다.

사이트에서 필수 조건을 보면

    1. AdminstratorAccess를 사용하여 AWS 계정에 액세스할 수 있어야 합니다.
    
    2. 이 랩은 us-east-1 지역 에서 실행되어야 합니다.
    
    3. 이 가이드의 링크를 따라가서 새 탭에서 여는 것이 가장 좋습니다.
    
    4. 최신 브라우저에서 이 랩을 실행하세요

이런식으로 되어있는데 왜 리전은 저기서 하라는건지 모르겠지만 나는 그렇게 하기 싫어서 변형을 좀 하려고 합니다.

일단 하라는대로 진행해보고 그 후에 변형할 예정입니다.

## 버킷 생성

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/aws-practice-1/create-bucket.png" alt="버킷 생성" width="650" />

s3 콘솔에서 버킷을 생성해줍니다.

버킷 이름은 자유

### data 폴더 생성

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/aws-practice-1/folder-data.png" alt="data 폴더 생성" width="650" />

### reference_data 폴더 생성 

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/aws-practice-1/reference-data.png" alt="reference_data 폴더 생성" width="650" />

둘 다 이름은 자유롭게 하셔도 됩니다. 

저는 그냥 가이드 내용대로 진행했습니다.

### track_list.json 업로드

Data 다운로드 : [track_list.json](https://static.us-east-1.prod.workshops.aws/public/252b2158-4ee1-410c-b074-58190ec31cd6/static/data/tracks_list.json)

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/aws-practice-1/track_list.png" alt="track_list.json" width="650" />

파일은 샘플 데이터로 음악 트랙 목록이 json 형식으로 되어있습니다.

양은 얼마 안됩니다.

데이터의 스키마를 이해하고 ETL 작업에서 필요한 변환 로직을 구성하는데 쓰일 수 있습니다.

## Kinesis Firehose 생성

[Kinesis Firehose](https://us-east-1.console.aws.amazon.com/firehose/home?region=us-east-1#/home) 여기에서 배달 스트림 생성합니다.

미국 리전으로 되어있으니 만약 다른 리전인 경우 변경해서 사용하시면 됩니다.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/aws-practice-1/create-stream.png" alt="create stream" width="650" />

배달지와 목적지를 선택을 하는데요

**출처: Direct PUT**

**목적지: Amazon S3**

소스가 Direct PUT인 이유는 실시간 데이터가 아니라 저희가 직접 올리기 때문인 거 같습니다.

S3 버킷 접두사: data/raw/ 뒤에 '/'가 중요하다고 하는데, 붙이지 않으면 엉뚱한 곳에 데이터를 복사한다고 합니다. -> data 폴더에 raw 폴더 생성

버퍼 조건은 그냥 저장의 간격이라고 생각하시면 됩니다.

## 더미 데이터 생성 

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/aws-practice-1/create-stack.png" alt="create stack" width="650" />

왜 리전을 us-east-1 하라고 했나 그 이유가.. 

Cognito를 구성하는 클라우드 형성 스택 때문에 리전 변경하라고 한 거 같습니다. [cognito-setup.yaml](https://aws-kdg-tools-us-east-1.s3.amazonaws.com/cognito-setup.yaml)

us-east-1 리전에서 사용하도록 설계되어서 서울 리전에서 사용하려고 하면 오류가 발생합니다.

뭐 다운로드를 받아서 수정해서 사용해도 될 수 있긴 합니다. 아님 리전을 us-east-1로 변경하던지.

근데 사실 위에 yml 파일은  Kinesis Data Generator를 이용해 더미데이터를 만들어서 Fire hose로 전달하기 위함인데

굳이 더미데이터를 사용하지 않을거면 이 기능을 이용할 필요가 없을 거 같습니다.

방향을 약간 틀어서 진행해보려고 합니다.

감사합니다

다음 포스트에서 계속! 🫡





