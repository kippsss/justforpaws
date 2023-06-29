"use client";
import React from "react";
import Image from "next/image";
import { Card, Col, Text, Modal } from "@nextui-org/react";
import { motion } from "framer-motion";

type Props = {};

export default function Dogs({}: Props) {
  const [visible, setVisible] = React.useState(false);
  const [dogProfiles, updateDogProfiles] = React.useState([
    {
      id: 0,
      name: "Egon",
      breed: "Mongrel",
      age: 5,
      available: true,
      image: "/dog0.jpg",
      description:
        "Egon, the 5-year-old mongrel, is a charming and affectionate mixed-breed dog with a personality as unique as his name. With his captivating blend of physical traits and endearing behavior, Egon captures the hearts of everyone he meets. His medium-sized frame and a coat that showcases a mixture of colors and patterns make him a visually striking pooch. Egon's warm and friendly nature shines through as he eagerly approaches new friends, always ready to shower them with affectionate tail wags and gentle kisses. This adaptable and intelligent mongrel, named Egon, is a delightful companion who brings joy and love into the lives of his human family.",
    },
    {
      id: 1,
      name: "Small Girl",
      breed: "Mongrel",
      age: 8,
      available: true,
      image: "/dog1.jpg",
      description:
        "Small Girl, the 8-year-old mongrel, is a lovable and mature mixed-breed dog with a name that has stood the test of time. Despite her age, she exudes a timeless charm and a wise, soulful presence. Small Girl may have a sprinkling of gray in her coat, adding a touch of elegance to her appearance. Her medium-sized frame showcases a combination of traits that reflect her diverse heritage. Small Girl's calm and gentle demeanor make her a wonderful companion, providing comfort and companionship to those around her. With her years of experience, Small Girl understands the importance of taking life at a relaxed pace, yet she still enjoys the occasional playful moment and adores the affection of her loved ones. Small Girl, the 8-year-old mongrel, is a cherished member of any family seeking a mature and loyal friend to share their lives with.",
    },
    {
      id: 2,
      name: "Baba",
      breed: "Belgian Shephard",
      age: 3,
      available: true,
      image: "/dog2.jpg",
      description:
        "Baba, the 3-year-old Belgian Shepherd, is a remarkable and intelligent canine companion. With a name as strong and powerful as Baba, this Shepherd embodies confidence and loyalty. Standing tall with a well-muscled physique, Baba displays the distinctive characteristics of the Belgian Shepherd breed. His striking coat, often adorned in rich shades of fawn or mahogany, accentuates his regal appearance. Known for their exceptional intelligence and trainability, Baba possesses a keen mind and a desire to learn and please. Whether it's engaging in obedience training, agility exercises, or simply exploring the great outdoors, Baba thrives on mental and physical stimulation. Despite his strength and intensity, Baba has a gentle and devoted nature, forming strong bonds with his family. As a trusted and vigilant protector, Baba's loyalty knows no bounds. With his impressive qualities and unwavering dedication, Baba, the 3-year-old Belgian Shepherd, brings both grace and strength to the lives of those fortunate enough to call him their companion.",
    },
    {
      id: 3,
      name: "Bagel",
      breed: "Springer Spaniel",
      age: 9,
      available: true,
      image: "/dog3.jpg",
      description:
        "Bagel, the 9-year-old Springer Spaniel, is a lovable and energetic companion with a name as delightful as his personality. Despite reaching his senior years, Bagel's spirit remains as vibrant as ever. With his medium-sized frame and a lustrous coat adorned in rich colors and beautiful markings, Bagel is a sight to behold. Known for their intelligence and athleticism, Springer Spaniels like Bagel possess an innate zest for life and a natural enthusiasm for play and exploration. Whether it's chasing balls, sniffing out scents, or enjoying a leisurely walk, Bagel's energy and love for adventure are contagious. With his kind and gentle nature, Bagel has a special way of forging deep bonds with his human family. His expressive eyes and wagging tail are a testament to his unwavering loyalty and devotion. Bagel, the 9-year-old Springer Spaniel, brings joy, companionship, and a lifetime of cherished memories to those fortunate enough to be part of his life.",
    },
    {
      id: 4,
      name: "Paris",
      breed: "Mongrel",
      age: 2,
      available: false,
      image: "/dog4.jpg",
      description:
        "Paris, the 2-year-old mongrel, is a charismatic and free-spirited canine companion. Named after the captivating city itself, Paris embodies a sense of adventure and joie de vivre. With her medium-sized frame and an exuberant mix of coat colors and patterns, she stands out as a uniquely beautiful dog. Paris's energetic nature and playful disposition are evident in her boundless enthusiasm for life. Whether she's chasing after a ball, exploring new surroundings, or engaging in interactive play, Paris's zest for adventure is contagious. Her intelligence and quick learning abilities make her a joy to train and interact with. Paris's friendly and outgoing nature ensures that she gets along well with both humans and other dogs, making her a popular companion wherever she goes. With her charming personality and infectious spirit, Paris, the 2-year-old mongrel, is ready to embark on new experiences and bring a touch of excitement to the lives of those lucky enough to have her by their side.",
    },
  ]);
  const openModalHandler = (e) => {
    // setModalContent(dogs.find(x => x.id === id));
    console.log(e);
    // setModalContent(item);
    setVisible(true);
  };
  const closeModalHandler = () => {
    setVisible(false);
  };

  return (
    <div className="flex flex-col items-center p-8 sm:p-10 bg-[#F6F6F6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className="mt-10 mb-20">
          <h2 className="text-4xl font-bold text-center">Our dogs</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogProfiles.map((dog) => (
            <Card
              key={dog.id}
              isPressable
              isHoverable
              onPress={openModalHandler}
            >
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={dog.image}
                  objectFit="cover"
                  width="100%"
                  height={300}
                  alt={"Image of dog - " + dog.name}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Col>
                  <Text size={22}>{dog.name}</Text>
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$md",
                    }}
                  >
                    {dog.breed}
                  </Text>
                </Col>
              </Card.Footer>
              <Modal closeButton open={visible} onClose={closeModalHandler}>
                <Modal.Header>
                  <Text className="text-left" size={22}>
                    {dog.name}
                  </Text>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
