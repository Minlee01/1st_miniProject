/*
일단 npm install --save react-horizontal-scrolling-menu
그 다음엔 https://wazacs.tistory.com/26
https://velog.io/@071yoon/React-Horizontal-Scroll-%EA%B5%AC%ED%98%84   참고...
*/
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import React, {useState, useContext} from "react";
import styled from "styled-components";
import 'react-horizontal-scrolling-menu/dist/styles.css';

// ... (imports)

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function HorizontalScroll() {
  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => selected.includes(id);

  const handleClick = (id) => () => {
    setSelected((currentSelected) =>
      isItemSelected(id)
        ? currentSelected.filter((el) => el !== id)
        : [...currentSelected, id]
    );
  };

  return (
    <ScrollMenu LeftArrow={ScrollLeftArrow} RightArrow={ScrollRightArrow}>
      {items.map(({ id }) => (
        <Card
          itemId={id}
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}

function ScrollLeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return <div onClick={() => scrollPrev()}>←</div>;
}

function ScrollRightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return <div onClick={() => scrollNext()}>→</div>;
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(itemId)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}

export default HorizontalScroll;
