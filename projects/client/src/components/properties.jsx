import {
  Box,
  useDisclosure,
  Text,
  Flex,
  Icon,
  Grid,
  Image,
  Menu,
  MenuButton,
  Divider,
  MenuList,
  MenuItem,
  Select,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import bgContent from "../assets/bgcontent.jpg";
import { useState } from "react";
import DeleteProduct from "./deleteProduct";
import EditProperty from "./editProperty";
import FooterLandingPage from "./footerLandingPage";
import Pagination from "./Pagination";
import AddReview from "./addReview";
import AddRooms from "./addRoom";
import PropertyDetail from "./propertyDetail";
import AddPropertyModal from "./addProperty";
import NavbarMobile from "./navbarMobile";
import { api } from "../api/api";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { motion } from "framer-motion";
import { useFetchProperty } from "../hooks/useProperty";
import { useSelector } from "react-redux";
import { SlTrash } from "react-icons/sl";
import { ImLocation } from "react-icons/im";
import { FcRating } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";
import { BsPatchPlusFill } from "react-icons/bs";
import { BiPlus, BiPencil } from "react-icons/bi";
import "@fontsource/barlow";
import "@fontsource/gilda-display";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "../styles/sliderLocation.css";
import "../styles/sliderCard.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
export default function PropertiesComp() {
  const Edit = useDisclosure();
  const DeleteModal = useDisclosure();
  const addProperty = useDisclosure();
  const addRoom = useDisclosure();
  const addReview = useDisclosure();
  const propertyDetail = useDisclosure();
  const userSelector = useSelector((state) => state.auth);
  const [pcm, setPcm] = useState([]);
  const [propertyId, setPropertyID] = useState();
  const [keyword, setKeyword] = useState();
  const [selectedProperty, setSelectedProperty] = useState();
  const [filter, setFilter] = useState({
    pcm: "",
    search: "",
  });
  useEffect(() => {
    fetch();
  }, [filter]);

  useEffect(() => {
    provinces();
  }, [filter]);

  const { properties, totalPage, handlePageClick, fetch } =
    useFetchProperty(filter);

  const provinces = async () => {
    await api
      .get("/properties/getprovincebytenantid/" + userSelector.id)
      .then((res) => {
        setPcm(res.data);
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Box
      display={{ base: "flex", lg: "none" }}
      flexDir={"column"}
      bgColor={"#edf2f9"}
      h={"100vh"}
      pos={"relative"}
      zIndex={"1"}
    >
      {/* navbar + sidebar + profile */}
      <NavbarMobile></NavbarMobile>

      {/* bg */}
      <Box py={"5%"} pt={"4em"}>
        <Flex
          flexDir={"column"}
          pos={"relative"}
          h={"30vh"}
          align={"center"}
          transition="transform 0.5s ease"
          _hover={{ transform: "translateY(-10px)" }}
        >
          <Image
            src={bgContent}
            pos={"absolute"}
            objectFit={"cover"}
            h={"100%"}
            w={"90%"}
            boxShadow={"lg"}
            borderRadius={"1em"}
          />
          <Text
            color={"#2c7be5"}
            pos={"absolute"}
            display={"flex"}
            alignItems={"center"}
            gap={"2%"}
            h={"100%"}
            w={"95%"}
            justifyContent={"center"}
            fontSize={{ base: "1.5em", lg: "3em" }}
            fontFamily={`'Gilda Display', sans-serif`}
            textAlign={"center"}
            fontWeight={"bold"}
            transition="transform 0.5s ease"
            _hover={{ transform: "translateY(20px)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Manage
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Your
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Properties
            </motion.div>
          </Text>
        </Flex>
      </Box>

      {/* add properties */}
      <Flex flexDir={"column"} align={"center"}>
        <Box
          display={"flex"}
          flexDir={"column"}
          mt={"2em"}
          w={"90%"}
          bgColor={"white"}
          border={"1px solid #dbdbdb"}
          borderRadius={"5px"}
          boxShadow={"md"}
          transition="transform 0.5s ease"
          _hover={{ transform: "translateY(-10px)" }}
        >
          <Text
            fontSize={"20px"}
            w={"100%"}
            fontFamily={`'Barlow', sans-serif`}
            pl={"5%"}
            pt={"0.5em"}
            fontWeight={"bold"}
          >
            Add New Properties
          </Text>

          <Box
            fontSize={"13px"}
            w={"100%"}
            fontFamily={`'Barlow', sans-serif`}
            pl={"5%"}
            pt={"0.5em"}
            borderRadius={"5px"}
          >
            <Text> * Add properties Name</Text>
            <Text> * Add properties Description </Text>
            <Text> * Add properties Location</Text>
            <Text> * Add properties Picture Max 3 photos</Text>
          </Box>

          <Text
            fontSize={"20px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontFamily={`'Barlow', sans-serif`}
            px={"0.5em"}
            gap={"0.5em"}
            mt={"0.5em"}
            onClick={addProperty.onOpen}
            borderTop={"2px dashed black"}
          >
            <Icon as={BsPatchPlusFill} />
            New properties
          </Text>
        </Box>
      </Flex>

      {/* list based on location */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box display={"flex"} justifyContent={"center"} bgColor={"#edf2f9"}>
          <Text
            fontSize={"20px"}
            w={"90%"}
            mt={"1em"}
            display={"flex"}
            justifyContent={"center"}
            fontFamily={`'Barlow', sans-serif`}
            py={"1em"}
            bgColor={"white"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            border={"1px solid #dbdbdb"}
            boxShadow={"md"}
            transition="transform 0.5s ease"
            _hover={{ transform: "translateY(-10px)" }}
          >
            Properties
          </Text>
        </Box>
      </motion.div>

      {/* filter */}

      <Select
        p={2}
        mt={"1em"}
        bg={"white"}
        onChange={(e) =>
          setFilter({
            pcm: e.target.value,
          })
        }
        placeholder="Filter by province"
        color={"gray"}
        value={filter?.pcm}
      >
        {pcm.map((prov) => (
          <option value={prov?.province}>{prov?.province}</option>
        ))}
      </Select>

      <InputGroup p={2}>
        <Input
          bg={"white"}
          placeholder={"Search by property name, location"}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <InputRightAddon
          bg={"white"}
          onClick={() => {
            setFilter({ pcm: "", search: keyword });
            setKeyword("");
          }}
        >
          <Icon as={FaSearch} />
        </InputRightAddon>
      </InputGroup>

      {/* product card */}
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={10}
        mt={"1em"}
        pb={"2em"}
        bgColor={"#edf2f9"}
      >
        {properties &&
          properties?.map((val) => (
            <Box align={"center"} bgColor={"#edf2f9"}>
              <Box
                w={"90%"}
                bgColor={"white"}
                borderRadius={"md"}
                border={"1px solid #dbdbdb"}
                py={"1.5em"}
                boxShadow={"md"}
                fontFamily={`'Barlow', sans-serif`}
                transition="transform 0.5s ease"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="swipercard"
                >
                  {val?.PropertyImages?.map((pict) => (
                    <SwiperSlide className="swipercard-slide ">
                      <Image
                        src={`${process.env.REACT_APP_API_BASE_URL}${pict?.picture}`}
                        h={"250px"}
                        objectFit={"cover"}
                        borderRadius={"md"}
                        border={"1px solid #dbdbdb"}
                      ></Image>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Box
                  mt={"5%"}
                  pr={1}
                  display={"flex"}
                  w={"100%"}
                  justifyContent={"right"}
                  borderTop={"2px dashed black"}
                >
                  <Menu>
                    <MenuButton>
                      <Image as={BiDotsHorizontalRounded} boxSize={7} />
                    </MenuButton>
                    <MenuList minW={"100px"}>
                      <MenuItem
                        onClick={() => {
                          propertyDetail.onOpen();
                          setPropertyID(val?.id);
                        }}
                        display={"flex"}
                        gap={"10px"}
                      >
                        <Icon as={CgDetailsMore} />
                        Details
                      </MenuItem>

                      <Divider />

                      <MenuItem
                        onClick={() => {
                          Edit.onOpen();
                          setSelectedProperty(val);
                        }}
                        display={"flex"}
                        gap={"10px"}
                      >
                        <Icon as={BiPencil} />
                        Edit Property
                      </MenuItem>

                      <Divider />

                      <Divider />

                      <MenuItem
                        onClick={() => {
                          addRoom.onOpen();
                          setPropertyID(val?.id);
                        }}
                        display={"flex"}
                        gap={"10px"}
                      >
                        <Icon as={BiPlus} />
                        Add Room
                      </MenuItem>

                      <Divider />

                      <MenuItem
                        onClick={() => {
                          addReview.onOpen();
                          setPropertyID(val?.id);
                        }}
                        display={"flex"}
                        gap={"10px"}
                      >
                        <Icon as={BiPlus} />
                        Add Review
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          (Beta)
                        </motion.div>
                      </MenuItem>

                      <Divider />

                      <MenuItem
                        onClick={() => {
                          DeleteModal.onOpen();
                          setPropertyID(val?.id);
                        }}
                        display={"flex"}
                        gap={"10px"}
                        color={"red"}
                      >
                        <Icon as={SlTrash} />
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>

                <Box>
                  <Box
                    mb={"0.5em"}
                    w={"90%"}
                    display={"flex"}
                    justifyContent={"left"}
                    fontWeight={"bold"}
                    fontSize={"1.5em"}
                  >
                    {val?.property_name}
                  </Box>

                  <Box display={"flex"} w={"90%"}>
                    <Flex
                      flex={1}
                      flexDir={"column"}
                      textAlign={"left"}
                      gap={"1em"}
                    >
                      <Text
                        display={"flex"}
                        fontSize={"0.8em"}
                        gap={"0.3em"}
                        alignItems={"center"}
                      >
                        <Icon as={ImLocation} />
                        {val?.City?.city_name}, {val?.City?.province}
                      </Text>

                      <Text
                        display={"flex"}
                        fontSize={"0.8em"}
                        gap={"0.3em"}
                        alignItems={"center"}
                      >
                        <Icon as={FcRating} />
                        {val?.rating ? val?.rating : 0} / 10
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        <AddPropertyModal
          isOpen={addProperty.isOpen}
          onClose={addProperty.onClose}
          fetch={fetch}
          fetchProv={provinces}
          id={userSelector.id}
        />
        <EditProperty
          isOpen={Edit.isOpen}
          onClose={() => {
            Edit.onClose();
            setSelectedProperty(null);
          }}
          data={selectedProperty}
          fetch={fetch}
          id={userSelector.id}
          fetchProv={provinces}
        />
        <DeleteProduct
          isOpen={DeleteModal.isOpen}
          onClose={DeleteModal.onClose}
          id={propertyId}
          fetch={fetch}
          fetchProv={provinces}
        />
        <AddRooms
          isOpen={addRoom.isOpen}
          onClose={addRoom.onClose}
          id={propertyId}
          fetch={fetch}
        />
        <PropertyDetail
          isOpen={propertyDetail.isOpen}
          onClose={propertyDetail.onClose}
          id={propertyId}
          properties={properties}
        />
        <AddReview
          isOpen={addReview.isOpen}
          onClose={addReview.onClose}
          id={propertyId}
          fetch={fetch}
        />
      </Grid>
      <Pagination data={{ totalPage, handlePageClick }} />

      <FooterLandingPage></FooterLandingPage>
    </Box>
  );
}
