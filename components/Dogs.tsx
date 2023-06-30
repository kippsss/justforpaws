"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { getDogsList } from "@/sheets";

// export async function getServerSideProps({ query }) {
//   // Auth
//   const auth = await google.auth.getClient({
//     scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });

//   // Query
//   const { id } = query;
//   const range = `Sheet1!A$11:D11`;
//   const response = await sheets.spreadsheets.values.get({
//     spreadsheetId: process.env.SHEET_ID,
//     range,
//   });

//   // Result
//   const [name, age, rescued, good] = response.data.values[0];

//   return {
//     props: { name, age, rescued, good },
//   };
// }

// export async function getStaticProps(context) {
//   const dogss = await getDogsList();
//   return {
//     props: {
//       dogss: dogss.slice(1, dogss.length), // remove sheet header
//     },
//     revalidate: 1, // In seconds
//   };
// }

export default function Dogs() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [dogName, setDogName] = React.useState("");

  const closeModalHandler = (e: any) => {
    if (e.target.id == "modal-overlay") {
      setModalOpen(false);
    }
  };

  const openModalHandler = (e: any) => {
    setDogName(e.currentTarget.id);
    setModalOpen(true);
  };

  const contactHandler = () => {
    setModalOpen(false);
  };

  const dogsFallback = {
    name: "Name",
    breed: "Breed",
    age: "Age",
    hdb: true,
    image: "/justforpaws_logo.png",
    description:
      "Description",
  };

  const dogs = [
    {
      name: "Asher",
      breed: "Mongrel",
      age: "8",
      hdb: true,
      image: "/dogs/asher.jpeg",
      description:
        "Asher, an alpha dog found in northern Singapore with devoted companion Ashley, is an intelligent, calm, and friendly canine. With excellent leash manners, he's a joy to walk. To provide the best for both Asher and Ashley, they must be rehomed together. Don't miss the opportunity to adopt this remarkable duo and experience the love and loyalty they bring.",
    },
    {
      name: "Ashley",
      breed: "Mongrel",
      age: "7",
      hdb: true,
      image: "/dogs/ashley.jpeg",
      description:
        "Meet Ashley, a timid and gentle dog who was found roaming the northern part of Singapore alongside her faithful partner, Asher. Despite her shyness, Ashley is good on walks (best we've had in a long while!) and displays a gentle and quiet demeanor. She is a perfect companion for someone seeking a calm and loving presence. It's important to note that Ashley must be rehomed with her inseparable partner, Asher, to maintain their emotional well-being and provide them with a stable and happy life. Consider adopting this delightful duo and experience the bond and affection they share.",
    },
    {
      name: "Bentley",
      breed: "Mongrel",
      age: "?",
      hdb: false,
      image: "/dogs/bentley.jpeg",
      description:
        "Meet Bentley, a friendly and affectionate dog looking for a forever home. Bentley's enthusiasm sometimes gets the best of him, and he may nip when he's excited, so it's essential to provide him with guidance and positive reinforcement. During walks, Bentley might tug slightly on the leash, but with some training and patience, he will become an excellent walking companion. If you're seeking a loving and lively companion and are willing to work on training, Bentley could be the perfect addition to your family.",
    },
    {
      name: "Charcoal",
      breed: "Mongrel",
      age: "?",
      hdb: true,
      image: "/dogs/charcoal.jpeg",
      description:
        "Charcoal, a friendly and loving dog, is seeking a home where she can be the center of attention. While she adores humans and are sensitive to touches, Charcoal can be cautious around other dogs, so she would thrive in a household without any other canines. Her intelligence shines through, although she has a habit of nipping that requires patience and a skilled handler. If you're an experienced dog owner who can provide the guidance and understanding Charcoal needs, you'll be rewarded with a devoted and loyal companion who will bring joy to your life.",
    },
    {
      name: "Carrie",
      breed: "Mongrel",
      age: "1.5",
      hdb: true,
      image: "/dogs/carrie.jpeg",
      description:
        "Carrie, was rescued alongside her mother, Cleo, and sister, Chloe. With her lovely big eyes, Carrie is an enchanting companion. However, she can be quite skittish and requires a patient and loving home. On walks, she can become anxious, so a calm and supportive handler would be ideal for her. With time, understanding, and a nurturing environment, Carrie has the potential to blossom into a loyal and devoted pet. If you're willing to provide the care and attention she needs, Carrie will reward you with endless love and gratitude.",
    },
    {
      name: "Chloe",
      breed: "Mongrel",
      age: "1.5",
      hdb: true,
      image: "/dogs/chloe.jpeg",
      description:
        "Young and energetic Chloe was rescued alongside her mother, Cleo, and sister, Carrie. While she can be slightly skittish, Chloe walks well and shows potential for improvement. With time and patience, Chloe will warm up and become affectionate, forming a strong bond with her loving adoptive family. Her youthful energy will keep the household lively and active, making her an ideal companion for those seeking an adventurous and spirited canine companion. Consider opening your heart and home to Chloe and witness her transformation into a loyal and loving companion.",
    },
    {
      name: "Cleo",
      breed: "Mongrel",
      age: "3",
      hdb: true,
      image: "/dogs/cleo.jpeg",
      description:
        "Cleo, a gentle and responsible mother, was rescued with her daughters Chloe and Carrie. This shy but loving dog walks gracefully on a leash and takes great care of her two daughters during walks. Cleo's nurturing nature extends to mealtime, as she patiently waits for her daughters to eat before enjoying her own meal. Getting along well with other dogs, Cleo would be a wonderful addition to a quiet family seeking a loyal and affectionate companion. With time and a calm environment, Cleo will flourish, rewarding her adoptive family with unwavering love and companionship.",
    },
    {
      name: "Coco",
      breed: "Mongrel",
      age: "9",
      hdb: true,
      image: "/dogs/coco.jpeg",
      description:
        "Coco has proudly fulfilled her role as a nurturing mother to two adorable puppies, both of whom have found their own loving families. However, Coco herself remains overlooked due to her skittish nature, making it challenging for her to find a new home. She tends to hide from visitors, but once she warms up, her gentle and affectionate side shines through. Coco is a social butterfly when it comes to other dogs and would thrive in a home with canine companions. Help Coco discover the happiness she deserves by welcoming her into your loving home.",
    },
    // {
    //   name: "Chow",
    //   breed: "Mongrel",
    //   age: "?",
    //   hdb: false,
    //   image: "/justforpaws_logo.png",
    //   description: "",
    // },
    {
      name: "Dunno",
      breed: "Mongrel",
      age: "3",
      hdb: false,
      image: "/dogs/dunno.jpeg",
      description:
        "Introducing Dunno, this big-hearted canine bears resemblance to the iconic Scooby-Doo. Dunno's size may be impressive, but his leash manners are surprisingly good, making him an ideal walking companion. With his gentle nature and easygoing personality, Dunno is well-suited for smaller families seeking a loyal and devoted four-legged friend. Open your hearts and home to Dunno, and together you can create unforgettable adventures and cherish a lifetime of love and companionship.",
    },
    {
      name: "Hugo",
      breed: "Mongrel",
      age: "3",
      hdb: true,
      image: "/dogs/hugo.jpeg",
      description:
        "Despite his age, Hugo retains a youthful appearance and boasts robust health. He was discovered wandering the streets alongside his companion, Pepper, and together they endured the heartbreak of losing their puppies to the parvovirus (all but one, who was successfully rehomed). While Hugo and Pepper's journey has been difficult, Hugo's resilience shines through and he holds on to hope and the capacity to form deep bonds. With his enduring spirit, Hugo is ready to bring joy and companionship to a forever family that will cherish him unconditionally.",
    },
    {
      name: "Jordan",
      breed: "Mongrel",
      age: "8",
      hdb: false,
      image: "/dogs/jordan.jpeg",
      description:
        "Jordan's natural intelligence established him as an alpha in the Sengei Tengah area. His distinctive curled hair adds to his unique charm. Initially captured under the Trap, Neuter, Release (TNR) programme, Jordan was deemed suitable for a home environment and was placed under our care in hopes of finding a family who would take him in. While Jordan thrives with larger dogs, he is best suited for a home without small dogs.",
    },
    {
      name: "Leo",
      breed: "Mongrel",
      age: "10+",
      hdb: true,
      image: "/dogs/leo.jpeg",
      description:
        "Leo was roaming the streets in the central area in Singapore before he was rescued. This handsome, long haired senior dog is healthy and independent, and we've had him for almost 2 years in the shelter. It's time for him to retire and enjoy the warmth of a loving home. If you are prepared to open your hearts to love Leo in the golden years of his retirement, please reach out to us. ",
    },
    {
      name: "Luna",
      breed: "Mongrel",
      age: "7",
      hdb: true,
      image: "/dogs/luna.jpeg",
      description:
        "Luna holds the honorable title of being Stitch's mother, having been rescued alongside her adorable pup. This sweet canine companion excels in leash walking, making strolls a delightful experience. Luna has a calm and laid-back nature, preferring low-energy activities and relishing in moments of relaxation. If you're looking for a loyal and easygoing companion to enjoy quiet moments with, Luna is the perfect match. Embrace Luna's gentle spirit and give her the loving home she deserves.",
    },
    {
      name: "Nana",
      breed: "Mongrel",
      age: "5",
      hdb: true,
      image: "/dogs/nana.jpeg",
      description:
        "Nana may be a bit skittish, but she shines when it comes to leash walking, making outdoor adventures a joy. However, Nana has experienced some challenges with other dogs, often finding herself the target of bullying. She yearns for a safe and nurturing environment where she can build her confidence and thrive. If you have the patience and dedication to help Nana overcome her fears and provide her with a loving space, she will reward you with unwavering loyalty and affection.",
    },
    // {
    //   name: "Niu Niu",
    //   breed: "Mongrel",
    //   age: "5",
    //   hdb: true,
    //   image: "/justforpaws_logo.png",
    //   description: "",
    // },
    // {
    //   name: "Pepper",
    //   breed: "Mongrel",
    //   age: "10",
    //   hdb: true,
    //   image: "/justforpaws_logo.png",
    //   description: "",
    // },
    {
      name: "Stitch",
      breed: "Mongrel",
      age: "5",
      hdb: true,
      image: "/dogs/stitch.jpeg",
      description:
        "Stitch earned her name due to a long gash on her neck that was discovered upon her rescue. Stitch longs for a caring family that will provide her with the healing, security, and unconditional love she deserves. With her unique story and unwavering spirit, Stitch is ready to weave herself into the hearts of those who will give her a second chance at happiness.",
    },
    {
      name: "Whitney",
      breed: "Mongrel",
      age: "5",
      hdb: true,
      image: "/dogs/whitney.jpeg",
      description:
        "Despite her siblings finding loving families, Whitney has remained in the shelter, patiently waiting for her turn. She is a mix of affection and skittishness, craving love and understanding. Whitney would flourish in a small family environment, where her unique personality can be nurtured with patience and exposure to new experiences.",
    },
    {
      name: "Xiao Hei",
      breed: "Mongrel",
      age: "8",
      hdb: true,
      image: "/dogs/xiaohei.jpeg",
      description:
        "With his affectionate nature, Xiao Hei will readily approach anyone with a wagging tail and a heart full of love. His unique physique is characterized by a short and stout body, complemented by soft fur. However, Xiao Hei harbors a fear of rain and thunder, seeking comfort and reassurance during storms. If you're looking for a loyal and cuddly companion who will shower you with affection and bring warmth to your home, Xiao Hei is the perfect match. Embrace this little bundle of love and provide him the security he longs for.",
    },
    {
      name: "Zita",
      breed: "Mongrel",
      age: "?",
      hdb: true,
      image: "/dogs/zita.jpeg",
      description:
        "Despite being blind in one eye, Zita's spirit remains unwavering, and she adores going on walks with a heart full of enthusiasm. With her loving nature, she is well-suited for small families seeking a devoted companion. Zita's resilience and affectionate spirit will surely warm your heart. If you're ready to provide a loving home for this special pup, she's ready to fill your life with unconditional love and joy.",
    },
  ];

  const variants = {
    active: {
      backgroundColor: "#f00",
    },
    inactive: {
      backgroundColor: "#ffffff",
      transition: { duration: 2 },
    },
  };

  return (
    <div className="flex flex-col items-center p-8 sm:p-10 bg-[#F6F6F6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="flex flex-col items-center z-1"
      >
        <div className="mt-10 mb-20">
          <h2 className="text-4xl font-bold text-center">Our Dogs</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
          {dogs.map((dog) => (
            <div
              className="flex flex-col bg-[#FFFFFF] cursor-pointer max-w-sm"
              onClick={openModalHandler}
              id={dog.name}
              key={dog.name}
            >
              <div className="h-96 overflow-hidden">
                <motion.img
                  initial={{ scale: 1 }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                  whileHover={{ scale: 1.15 }}
                  key={dog.name}
                  src={dog.image}
                  alt="Image of dog"
                  className="object-cover h-full w-full"
                />
              </div>
              <motion.div
                initial={{ backgroundColor: "#ffffff" }}
                transition={{ duration: 0.3 }}
                whileHover={{ backgroundColor: "#f0f0f0" }}
                className="flex flex-col p-5"
              >
                <h2 className="text-2xl font-bold mb-1">{dog.name}</h2>
                <h3 className="text-lg font-semibold text-[#999999]">
                  {dog.breed}
                </h3>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            id="modal-overlay"
            className="z-50 w-screen h-screen fixed top-0 bg-black/[.54] flex justify-center items-center cursor-pointer"
            onClick={closeModalHandler}
          >
            <div
              id="modal-box"
              className="bg-white w-3/4 xl:w-10/12 h-3/4 max-h-[45rem] max-w-lg xl:max-w-6xl flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between overflow-auto"
            >
              <img
                src={
                  modalOpen
                    ? dogs.find((dogObj) => dogObj.name === dogName)?.image ?? dogsFallback.image
                    : "/justforpaws_logo.png"
                }
                alt="Image of dog"
                className="w-[35rem] h-auto xl:h-full xl:w-auto object-cover"
              />
              <div className="flex flex-col p-5 xl:px-8">
                <h2 className="text-2xl font-bold mb-1">
                  {dogs.find((dogObj) => dogObj.name === dogName)?.name ?? dogsFallback.name}
                </h2>
                <h3 className="text-lg font-semibold text-[#999999]">
                  {dogs.find((dogObj) => dogObj.name === dogName)?.breed ?? dogsFallback.breed}
                </h3>
                <h4 className="text-md font-semibold text-[#999999] mb-2">
                  {dogs.find((dogObj) => dogObj.name === dogName)?.age ?? dogsFallback.age} years
                  old
                </h4>
                <p className="text-md mb-5">
                  {dogs.find((dogObj) => dogObj.name === dogName)?.description ?? dogsFallback.description}
                </p>
                <div className="flex flex-row items-center text-sm">
                  {dogs.find((dogObj) => dogObj.name === dogName)?.hdb ?? dogsFallback.hdb ? (
                    <CheckIcon className="mr-1 fill-[#3CB043]" />
                  ) : (
                    <ClearIcon className="mr-1 fill-[#D30000]" />
                  )}
                  <h5>HDB approved</h5>
                </div>
                <Link href="#contact">
                  <motion.button
                    initial={{ opacity: 1 }}
                    whileHover={{
                      opacity: 0.8,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center text-sm font-semibold px-4 py-3 text-white my-5 bg-[#FB3E31] w-36 mt-8 rounded-none"
                    onClick={contactHandler}
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
