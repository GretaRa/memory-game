import Card from "./Card.js";
import { useEffect, useState } from "react";

const CardBoard = () => {

  const [cardLayout, setCardLayout] = useState();

  let cardGrid = [<Card
      title={"Peony"}
      source={
        "https://images.pexels.com/photos/2534524/pexels-photo-2534524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      key={'peony'}
    />,
    <Card
      title={"Rose"}
      source={
        "https://images.pexels.com/photos/4899534/pexels-photo-4899534.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      }
      key={'rose'}
    />,
    <Card
      title={"Tulip"}
      source={
        "https://images.pexels.com/photos/12374985/pexels-photo-12374985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      key={'tulip'}
    />,
    <Card
      title={"Sunflower"}
      source={
        "https://images.pexels.com/photos/54267/sunflower-blossom-bloom-flowers-54267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      key={'sunflower'}
    />,
    <Card
      title={"Crocus"}
      source={
        "https://images.pexels.com/photos/348287/pexels-photo-348287.jpeg"
      }
      key={'crocus'}
    />,
    <Card
      title={"Dahlia"}
      source={
        "https://images.pexels.com/photos/2891092/pexels-photo-2891092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      key={'dahlia'}
    />,
    <Card
      title={"Daisy"}
      source={
        "https://images.pexels.com/photos/1196445/pexels-photo-1196445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      key={'daisy'}
    />,
    <Card
      title={"Carnation"}
      source={
        "https://images.pexels.com/photos/8355483/pexels-photo-8355483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      key={'carnation'}
    />,
    <Card
      title={"Cosmos"}
      source={
        "https://images.pexels.com/photos/14613972/pexels-photo-14613972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      key={'cosmos'}
    />,
    <Card
      title={"Aster"}
      source={
        "https://images.pexels.com/photos/85679/aster-tongolensis-michelmas-daisy-mauve-flower-85679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      key={'aster'}
    />
  ];

  function shuffle() {
    for (let i = cardGrid.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardGrid[i], cardGrid[j]] = [cardGrid[j], cardGrid[i]];
    }
    setCardLayout(cardGrid)
  }

  useEffect(() => {
    shuffle()
  }, [])


  return(
    <>
    {cardLayout}
    </>
  )
    
}

export default CardBoard