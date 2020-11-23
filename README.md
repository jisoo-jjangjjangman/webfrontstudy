### Week5 ###

#### 9.7.1. 객체 잠그기 ####
--------------------

객체를 잠그고 수정할 수 없게 만드는 방법
객체를 잠글 때는 다양한 방식 - 확장 가능 속성, 재정의 기능, 쓰기 가능 등
확장 가능 속성은 객체에 새로운 property를 추가할 수 있는지 결정함.
if 확장 가능 속성값이 true면? -> 새로운 프로퍼티 추가 가능
false 면 ? 추가 불가

#### 9.7.2. 확장 방지 / Object.preventExtensions 메서드 ####

``` var person = {name : "Jisoo"};
Object.preventExtensions(person);
person.age = 17;
console.log("age" in person); // ->false
```

이처럼 객체에 프로퍼티를 추가하는 명령은 무시된다.
그리고 Strict 모드에서 setter가 없는 접근자 프로퍼티를 쓰려고 시도하면 오류 발생!

Object.isExtensible 메서드 사용하면 객체가 확장 가능한지 / 아닌지 확인 가능.

```console.log(Object.isExtensible(person)); // ->false```

#### 9.7.3. 밀봉 : Object.seal 매서드 ####

인수로 받은 객체를 밀봉한다.

밀봉이란 ? 객체에 프로퍼티를 추가하는 것을 금지하고 기존의 모든 프로퍼티를 재정의 할 수 없게 만든다.
즉, 객체를 밀봉하면? 

프로퍼티 추가,삭제,수정 X / 읽기,쓰기 O
