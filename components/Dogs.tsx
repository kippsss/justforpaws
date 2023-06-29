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
  const [dogId, setDogId] = React.useState("");

  const closeModalHandler = (e: any) => {
    if (e.target.id == "modal-overlay") {
      setModalOpen(false);
    }
  };

  const openModalHandler = (e: any) => {
    setDogId(e.currentTarget.id);
    setModalOpen(true);
  };

  const contactHandler = () => {
    setModalOpen(false);
  };

  const dogs = [
    {
      id: 0,
      name: "Asher",
      breed: "Mongrel",
      age: "8",
      hdb: true,
      image:
        "/dogs/asher.jpeg",
      description:
        "Calm, low energy, friendly, good on walks but don't like to walk too much",
    },
    {
      id: 1,
      name: "Ashley",
      breed: "Mongrel",
      age: "7",
      hdb: true,
      image: "/dogs/ashley.jpeg",
      description:
        "Calm, low energy, shy. Will shy away from direct pats and leashing but good on walks.",
    },
    {
      id: 2,
      name: "Bently",
      breed: "Mongrel",
      age: "?",
      hdb: false,
      image: "/dogs/bentley.jpeg",
      description:
        "Friendly, medium energy, will tug slightly on walks and tends to nip when excitable.",
    },
    {
      id: 3,
      name: "Charcoal",
      breed: "Mongrel",
      age: "?",
      hdb: true,
      image: "/dogs/charcoal.jpeg",
      description:
        "Friendly, medium energy, sensitive to touches especially with new people. Generally unsure/scared of other dogs. Guards food with other dogs.",
    },
    {
      id: 4,
      name: "Carrie",
      breed: "Mongrel",
      age: "1.5",
      hdb: true,
      image: "/dogs/carrie.jpeg",
      description:
        "Skittish, avoids touches and leashing but once leashed, walks well.",
    },
    {
      id: 5,
      name: "Chloe",
      breed: "Mongrel",
      age: "1.5",
      hdb: true,
      image: "/dogs/chloe.jpeg",
      description:
        "Slightly skittish, will approach with food, generally okay on walks",
    },
    {
      id: 6,
      name: "Cleo",
      breed: "Mongrel",
      age: "3",
      hdb: true,
      image: "/dogs/cleo.jpeg",
      description:
        "Quite skittish but will approach with food. Avoids touches and leashing. Will dart on walks and can be quite anxious.",
    },
    {
      id: 7,
      name: "Coco",
      breed: "Mongrel",
      age: "9",
      hdb: true,
      image: "/dogs/coco.jpeg",
      description:
        "Shy, low energy, will avoid direct pats and leashing but good on walks.",
    },
    {
      id: 8,
      name: "Chow",
      breed: "Mongrel",
      age: "?",
      hdb: false,
      image: "/justforpaws_logo.png",
      description: "",
    },
    {
      id: 9,
      name: "Dunno",
      breed: "Mongrel",
      age: "3",
      hdb: false,
      image: "/dogs/dunno.jpeg",
      description:
        "Medium energy, good on walks, more on the dominant/alpha side. Might redirect to handler when have scuffle with other dogs.",
    },
    {
      id: 10,
      name: "Hugo",
      breed: "Mongrel",
      age: "3",
      hdb: true,
      image:
        "/dogs/hugo.jpeg",
      description:
        "Medium energy, will approach with treats, will shy away from people, leashing and touches. Anxious on walks.",
    },
    {
      id: 11,
      name: "Jordan",
      breed: "Mongrel",
      age: "8",
      hdb: false,
      image:
        "/dogs/jordan.jpeg",
      description:
        "Friendly, medium energy, confident and walks well if he's willing to walk. Tend to hold his pee poo until on walks so likely can be grass trained in a home.",
    },
    {
      id: 12,
      name: "Leo",
      breed: "Mongrel",
      age: "10+",
      hdb: true,
      image: "/dogs/leo.jpeg",
      description:
        "Medium energy, will approach with treats, will shy away slightly with touches and leashing but good on walks.",
    },
    {
      id: 13,
      name: "Luna",
      breed: "Mongrel",
      age: "7",
      hdb: true,
      image:
        "/dogs/luna.jpeg",
      description:
        "Very friendly, very food motivated. Medium energy, walks well on leash.",
    },
    {
      id: 14,
      name: "Nana",
      breed: "Mongrel",
      age: "5",
      hdb: true,
      image: "/dogs/nana.jpeg",
      description:
        "Medium to low energy, shys away from people, touches and leashing but walks very well on leash. Just need to give her adequate space. Doesn't get too easily spooked on walks but is wary when someone is behind her.",
    },
    {
      id: 15,
      name: "Niu Niu",
      breed: "Mongrel",
      age: "5",
      hdb: true,
      image: "/justforpaws_logo.png",
      description: "",
    },
    {
      id: 16,
      name: "Pepper",
      breed: "Mongrel",
      age: "10",
      hdb: true,
      image: "/justforpaws_logo.png",
      description:
        "Medium energy, will approach with treats, generally tolerates pats and okay with leashing but might be reluctant to walk.",
    },
    {
      id: 17,
      name: "Stitch",
      breed: "Mongrel",
      age: "5",
      hdb: true,
      image: "/dogs/stitch.jpeg",
      description:
        "Medium energy, shys away slightly from people, touches and leashing. Tends to tug abit on walks, slightly anxious.",
    },
    {
      id: 18,
      name: "Whitney",
      breed: "Mongrel",
      age: "5",
      hdb: true,
      image: "/dogs/whitney.jpeg",
      description:
        "Medium energy, friendly and food motivated. Might be reluctant and protest on walks especially with people she's not familiar with.",
    },
    {
      id: 19,
      name: "Xiao Hei",
      breed: "Mongrel",
      age: "8",
      hdb: true,
      image: "/dogs/xiaohei.jpeg",
      description:
        "Medium energy, generally friendly but can be sensitive to touches around his hind area. Good on walks.",
    },
    {
      id: 20,
      name: "Zita",
      breed: "Mongrel",
      age: "?",
      hdb: true,
      image:
        "/dogs/zita.jpeg",
      description:
        "Medium energy, friendly, food motivated, good on walks but can be an escapist.",
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
              id={dog.id.toString()}
              key={dog.id}
            >
              <div className="h-96 overflow-hidden">
                <motion.img
                  initial={{ scale: 1 }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                  whileHover={{ scale: 1.15 }}
                  key={dog.id}
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
              className="bg-white w-3/4 lg:w-10/12 h-3/4 max-w-lg lg:max-w-6xl max-h-lg flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between overflow-auto"
            >
              <img
                src={
                  modalOpen
                    ? dogs[parseInt(dogId)].image
                    : "/justforpaws_logo.png"
                }
                alt="Image of dog"
                className="w-full lg:w-[35rem] h-[30rem] lg:h-full object-cover"
              />
              <div className="flex flex-col p-5 lg:px-8">
                <h2 className="text-2xl font-bold mb-1">
                  {dogs[parseInt(dogId)].name}
                </h2>
                <h3 className="text-lg font-semibold text-[#999999]">
                  {dogs[parseInt(dogId)].breed}
                </h3>
                <h4 className="text-md font-semibold text-[#999999] mb-2">
                  {dogs[parseInt(dogId)].age} years old
                </h4>
                <p className="text-md mb-5">
                  {dogs[parseInt(dogId)].description}
                </p>
                <div className="flex flex-row items-center text-sm">
                  {dogs[parseInt(dogId)].hdb ? <CheckIcon className="mr-1 fill-[#3CB043]" /> : <ClearIcon className="mr-1 fill-[#D30000]"/>}
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
