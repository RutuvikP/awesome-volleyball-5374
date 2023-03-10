import { Box, Card, SimpleGrid, Image, Text } from "@chakra-ui/react";

const babycare=[
    {
        "id":1,
        "title":"Baby & Infant Food",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/887a6ad5-010a-4eff-96f4-a7c8d715140d.webp"
    },
    {
        "id":2,
        "title":"Bath Essential",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ac6bcf1c-7742-4a89-adad-f12c467efd69.webp"
    },
    {
        "id":3,
        "title":"Diapers, Wipes & More",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/54ef2e82-9e5c-4707-b746-3330529c535e.webp"
    },
    {
        "id":4,
        "title":"Baby Skin Care",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/08d4d980-de5b-4ae2-858d-49e448089141.webp"
    },
    {
        "id":5,
        "title":"Gift Packs & Combos",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a604c2aa-efef-47b7-8a33-a70ae18abac0.webp"
    },
    {
        "id":6,
        "title":"Oral Health",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/930f6400-ee42-408a-ab5e-edda6c745c80.webp"
    },
    {
        "id":7,
        "title":"Baby Proofing",
        "img":"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/aaa6f701-d37c-45af-a68c-36c00fd8f0cb.webp"
    }
]

import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Text fontSize={'20px'} mt={'20px'} ml={'5%'} align={'left'}>Baby Care</Text>
        <Box boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'} m={'auto'} p={'25px'} mt={'30px'}>
        <Slider {...settings}>
        {
                    babycare.map((el)=>(
                        <Card key={el.id} p={'10px'} m={'15px'}>
                            <Image m={'auto'} src={el.img} w={'120px'} h={'120px'}></Image>
                            <Text>{el.title}</Text>
                        </Card>
                    ))
                }
        </Slider>
        </Box>
      </div>
    );
  }
}