# 원티드 프리온보딩 코스

## 1. toggle
![toggle](https://user-images.githubusercontent.com/22316798/152628094-92946e3c-13dd-49e1-99aa-9a93ee2edab3.gif)
 ### 구현 방법
  - 기본적인 스타일은 styled components를 이용하였습니다.
  - 클릭시 useState로 값을 변경시켜 애니메이션 트리커로 활용하였습니다.
 
 ### 어려웠던 점
  - 처음엔 클릭시 초록색 div가 회색 div를 덮을 예정이였으나 애니메이션 과정에서 border-radius가 원하는대로 작동하지않아서 덮지 않고 초록색 div가 회색 div를 밀어내는 식으로 작업하였습니다.
 
 ### 실행방법
  - 버튼을 클릭하면 됩니다.


## 2. tab
![tab](https://user-images.githubusercontent.com/22316798/152628801-9de8d69c-375e-4ff6-8aaf-6ca120a9aa9e.gif)
 ### 구현 방법
  - 스타일은 위와 동일
  - tab은 3개라고 가정하고 width를 33%로 줘서 버튼을 3개 만들었습니다.
  - tab클릭시 바탕색이 초록색으로 변하도록 useState를 이용하여 className에 active클래스를 핸들링 하였습니다.
 ### 어려웠던 점
  - 딱히 없습니다.
 ### 실행방법
  - 원하는 탭을 클릭하면 됩니다.

## 3. modal
![modal](https://user-images.githubusercontent.com/22316798/152628300-ad8a5595-d11f-4af0-94c2-2d27e1580232.gif)
 ### 구현 방법
  - 스타일은 위와 동일
  - 모달 뒤 검은배경을 화면을 꽉채우도록 스타일링하고 약간의 투명도를 주었습니다.
  - 모달과 배경은 open버튼 클릭시 isOpenModal변수를 통해 display style을 none, flex로 변하도록 하였습니다.
 ### 어려웠던 점
  - 뒷 배경의 위치를 정해주는것이 좀 어려웠습니다. 처음에는 absolute로 했는데 이러면 상위의 컴포넌트 스타일이 root가 아닐경우 깨지는 경우가 생겨서 fixed로 변경하였습니다.
 ### 실행방법
  - open modal 버튼을 클릭시 모달창이 나타나며 다시 모달창의 닫기 버튼을 클릭시 모달이 닫힙니다.

### 4. tag
![tag](https://user-images.githubusercontent.com/22316798/152628302-61874be9-e48b-49cb-a47f-306df2682987.gif)
### 구현방법
 - 스타일은 위와 동일
 - input의 onKeyPress를 이용하여 엔터가 눌리면 지금까지 입력했던값을 리스트에 저장합니다.
 - 저장된 리스트를 input앞에 렌더링하여 태그를 추가하면 버튼처럼 나타납니다.
 - 태그를 지우면 현재 리스트에서 filter를 통해서 리스트를 변경 후 리렌더링 합니다.
### 어려웠던 점
 - 한글이 들어가면 세로로 출력되는 문제가 있었는데 white-space속성으로 해결하였습니다.
### 실행방법
 - 원하는 태그를 입력하고 엔터를 누르면 추가된 태그를 볼 수 있습니다.
 - 삭제를 원하는 태그의 x표시를 누르면 삭제됩니다.

## 5. autoComplete
![autoComplete](https://user-images.githubusercontent.com/22316798/152628297-1645fdce-8f37-4a04-a1c3-b2ae98bb31d2.gif)
### 구현방법
 - 스타일은 위와 동일
 - 

## 6. clickToEdit
![clickToEdit](https://user-images.githubusercontent.com/22316798/152628299-e67c9f2b-dc0d-4c24-b312-b4f6c7be08a8.gif)
### 구현방법
 - 스타일은 위와 동일
 - 
