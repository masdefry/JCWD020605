import {
  Box,
  Center,
  Flex,
  Button,
  Select,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Drawer,
  useDisclosure,
  IconButton,
  Link,
} from "@chakra-ui/react";
import "@fontsource/barlow";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CiCalendarDate } from "react-icons/ci";
import React, { useState, useEffect } from "react";
import { useFetchCity, useFetchProv } from "../hooks/useProvAndCity";
export default function FilterDekstop() {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const onChangeDate1 = (date) => {
    setDate1(date);
  };
  const onChangeDate2 = (date) => {
    setDate2(date);
  };
  const calendar1 = useDisclosure();
  const calendar2 = useDisclosure();
  const { provinces } = useFetchProv();
  const [provinceId, setProvinceId] = useState("");
  const { cities } = useFetchCity(provinceId);
  return (
    <>
      <Box
        w={"100%"}
        position="absolute"
        zIndex={"3"}
        display={{ base: "none", lg: "flex" }}
        justifyContent={"center"}
        h={"60px"}
        transform="translate(0%, -220%)"
      >
        <Box
          h={"100%"}
          w={"95%"}
          bgColor={"#f8f5f0"}
          top="0"
          left="0"
          display={{ base: "none", xl: "flex" }}
          gap={"2px"}
          fontFamily={`'Barlow', sans-serif`}
          fontSize={"0.9em"}
          letterSpacing={"1px"}
        >
          {/* calendar 1 */}
          <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={"space-between"}
            bgColor={"white"}
          >
            <Box display={"flex"} alignItems={"center"} pl={"1em"}>
              {date1.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </Box>
            <Box display={"flex"}>
              <Box display={"flex"} alignItems={"center"}>
                <Center h={"100%"}>Check in</Center>

                <IconButton
                  aria-label="Open Menu"
                  icon={<CiCalendarDate />}
                  size="md"
                  fontSize={"25px"}
                  variant="none"
                  display={{ base: "none", lg: "flex" }}
                  onClick={calendar1.onOpen}
                />
                <Drawer
                  isOpen={calendar1.isOpen}
                  placement="bottom"
                  onClose={calendar1.onClose}
                >
                  <DrawerContent
                    w={"25%"}
                    ml={"15em"}
                    mb={"8em"}
                    borderRadius={"10px"}
                  >
                    <DrawerCloseButton />
                    <DrawerBody bgColor={"#f8f5f0"} borderRadius={"20px"}>
                      <Box
                        h={"25em"}
                        fontSize={{ base: "11px" }}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <Calendar
                          onChange={onChangeDate1}
                          value={date1}
                          formatShortWeekday={(locale, date) =>
                            date.toLocaleDateString(locale, {
                              weekday: "short",
                            })
                          }
                          formatDay={(locale, date) =>
                            date.toLocaleDateString(locale, {
                              day: "2-digit",
                            })
                          }
                          formatMonth={(locale, date) =>
                            date.toLocaleDateString(locale, {
                              month: "short",
                            })
                          }
                          formatYear={(locale, date) =>
                            date.toLocaleDateString(locale, {
                              year: "numeric",
                            })
                          }
                        />
                      </Box>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
            </Box>
          </Flex>
          {/* calendar 2 */}
          <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={"space-between"}
            bgColor={"white"}
          >
            <Box display={"flex"} alignItems={"center"} pl={"1em"}>
              {date2.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </Box>
            <Box display={"flex"}>
              <Box display={"flex"} alignItems={"center"}>
                <Center h={"100%"}>Check out</Center>

                <IconButton
                  aria-label="Open Menu"
                  icon={<CiCalendarDate />}
                  size="md"
                  fontSize={"25px"}
                  variant="none"
                  display={{ base: "none", lg: "flex" }}
                  onClick={calendar2.onOpen}
                />
                <Drawer
                  isOpen={calendar2.isOpen}
                  placement="bottom"
                  onClose={calendar2.onClose}
                >
                  <DrawerContent
                    w={"25%"}
                    ml={"15em"}
                    mb={"8em"}
                    borderRadius={"10px"}
                  >
                    <DrawerCloseButton />
                    <DrawerBody bgColor={"#f8f5f0"} borderRadius={"20px"}>
                      <Box
                        h={"25em"}
                        fontSize={{ base: "11px" }}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <Calendar
                          onChange={onChangeDate2}
                          value={date2}
                          formatShortWeekday={(locale, date) =>
                            date.toLocaleDateString(locale, {
                              weekday: "short",
                            })
                          }
                          formatDay={(locale, date) =>
                            date.toLocaleDateString(locale, {
                              day: "2-digit",
                            })
                          }
                          formatMonth={(locale, date) =>
                            date.toLocaleDateString(locale, {
                              month: "short",
                            })
                          }
                          formatYear={(locale, date) =>
                            date.toLocaleDateString(locale, {
                              year: "numeric",
                            })
                          }
                        />
                      </Box>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
            </Box>
          </Flex>

          <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={"space-between"}
            bgColor={"white"}
            alignItems={"center"}
          >
            <Select
              placeholder=""
              variant={"ghost"}
              fontFamily={`'Barlow', sans-serif`}
              fontSize={"1em"}
            >
              <option value="option1">1 Adult</option>
              <option value="option1">2 Adult</option>
              <option value="option1">3 Adult</option>
              <option value="option1">4 Adult</option>
            </Select>
          </Flex>

          <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={"space-between"}
            bgColor={"white"}
            alignItems={"center"}
          >
            <Select
              id="province"
              placeholder="province"
              value={provinceId}
              variant={"none"}
              onChange={(e) => {
                setProvinceId(e.target.value);
              }}
            >
              {provinces &&
                provinces.map((val, idx) => (
                  <option key={val.province_id} value={val.province_id}>
                    {val.province}
                  </option>
                ))}
            </Select>
          </Flex>

          <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={"space-between"}
            bgColor={"white"}
            alignItems={"center"}
          >
            <Select
              placeholder="City"
              variant={"ghost"}
              fontFamily={`'Barlow', sans-serif`}
              fontSize={"1em"}
            >
              {cities?.map((city) => (
                <option>{city.city_name}</option>
              ))}
            </Select>
          </Flex>

          <Flex
            w={"100%"}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            bgColor={"white"}
          >
            <Select
              placeholder=""
              variant={"ghost"}
              fontFamily={`'Barlow', sans-serif`}
              fontSize={"1em"}
            >
              <option value="option1">1 Room</option>
              <option value="option1">2 Rooms</option>
              <option value="option1">3 Rooms</option>
              <option value="option1">4 Rooms</option>
            </Select>
          </Flex>

          <Button
            w={"100%"}
            letterSpacing={"2px"}
            textTransform={"uppercase"}
            borderRadius={"none"}
            bgColor={"#aa8453"}
            color={"white"}
            fontSize={"0.8em"}
            fontWeight={"none"}
            h={"100%"}
            _hover={{ bgColor: "#aa8453", color: "white" }}
          >
            <Link
              w={"100%"}
              h={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              href="#"
            >
              Check Now
            </Link>
          </Button>
        </Box>
      </Box>
    </>
  );
}
