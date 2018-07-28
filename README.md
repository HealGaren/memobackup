# Memo

메모 서버 예제

## API Document

* Common Response

    HTTP 200 : Success

    HTTP 400 : Params Missing or Wrong Type

    HTTP 500 : 개발자 실수

---
### Users API

* POST /createToken : 토큰을 생성합니다.

> Params

    파라미터가 필요하지 않습니다.

> Response

```json
{ "message": "성공적으로 생성되었습니다." }
```

* POST /checkToken

> Params

```json
{ 
  "token" : "발급받은토큰"
}
```

> Response

성공 시
```json
{
  "valid": false,
  "message": "존재하지 않는 토큰입니다."
}
```

실패 시
```json
{
  "valid": false,
  "message": "존재하는 토큰입니다."
}
```

* POST /backup

> Params

memo 클래스 설계에 따라 data 내부 아이템이 다를 수 있습니다.
```json
{
  "token" : "발급받은토큰",
  "memos" : [ 
    { 
      "name": "메모입니다",
      "content": "콘텐츠입니다.",
      "detailContent": "자세한 콘텐츠 내용입니다."
    }
  ]
}
```

> Response

토큰이 잘못되었으면 (http code: 400)
```json
{
  "message": "존재하지 않는 토큰입니다."
}
```

memos 형식이 잘못되었으면 (http code: 400)
```json
{
  "message": "요청의 memos 필드가 잘못되었습니다."
}
```

성공 시 (http code: 200)
```json
{
  "message": "성공적으로 저장되었습니다."
}
```




* GET /backup

> Params

```json
{
  "token" : "발급받은토큰"
}
```

> Response

토큰이 잘못되었으면 (http code: 400)
```json
{
  "message": "존재하지 않는 토큰입니다."
}
```

성공 시
(memo 클래스 설계에 따라 data 내부 아이템이 다를 수 있습니다.)
```json
{
  "memos" : [ 
    { 
      "name": "메모입니다",
      "content": "콘텐츠입니다.",
      "detailContent": "자세한 콘텐츠 내용입니다."
    }
  ]
}
```
