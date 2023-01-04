import {
  Box,
  Grid,
  Container,
  Button,
  Typography,
  TextField,
  Chip,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

import SearchField from "./SearchField";

import bgImg from "../../../images/memberEducation.jpg";
import image1 from "../../../images/thumb-fundations1.jpg";
import image2 from "../../../images/thumb-fundations2.jpg";
import image3 from "../../../images/thumb-fundations3.jpg";
import image4 from "../../../images/thumb-fundations4.jpg";

const cards = [
  { link: "/member/academy/foundations", text: "FOUNDATIONS", img: image1 },
  { link: "", text: "TRADING", img: image2 },
  { link: "", text: "PLAY TO EARN", img: image3 },
  { link: "", text: "NFTS", img: image4 },
];

const learning_type = [
  { title: "Courses", key: 0 },
  { title: "Lessons", key: 1 },
];
const progress = [
  { title: "Not Started", key: 0 },
  { title: "In Progress", key: 1 },
  { title: "Completed", key: 2 },
];
const categories = [
  { title: "Fundations", key: 0 },
  { title: "Play to Earn", key: 1 },
  { title: "Trading", key: 2 },
  { title: "NFT", key: 3 },
  { title: "Security", key: 4 },
  { title: "Blockchain", key: 5 },
  { title: "Introduction", key: 6 },
  { title: "History", key: 7 },
];
const tags = [
  { title: "Fundations", key: 0 },
  { title: "Play to Earn", key: 1 },
  { title: "Trading", key: 2 },
  { title: "NFT", key: 3 },
  { title: "Security", key: 4 },
  { title: "Blockchain", key: 5 },
  { title: "Introduction", key: 6 },
  { title: "History", key: 7 },
];
const difficulty = [
  { title: "Beginner", key: 0 },
  { title: "Intermediate", key: 1 },
  { title: "Advanced", key: 2 },
];

const MemberEductaion = () => {
  const [text, setText] = useState("");
  const [allCourses, setAllCourses] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  });

  const [tagProps, setTagProps] = useState({});
  const [clearAll, setClearAll] = useState({});

  const handleDelete = (event) => {
    for (const [key, value] of Object.entries(clearAll)) {
      if (value) {
        setTimeout(() => {
          value(event);
        }, 200);
      }
    }
  };

  return (
    <Box bgcolor="#ededf5" pb={10}>
      <Box
        sx={{
          background: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Container maxWidth="md">
          <Box py={20}>
            <TextField
              sx={{
                width: "100%",
                height: "65px",
                paddingTop: "3px",
                fontSize: "18px",
                borderRadius: "50px",
                fontFamily: "Roboto",
                "& label.Mui-focused": {
                  borderRadius: "50px",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#fff",
                  borderRadius: "50px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                    borderRadius: "50px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                    borderRadius: "50px",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                    borderRadius: "50px",
                  },
                },
                input: {
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: "700",
                  "&::placeholder": {
                    textOverflow: "ellipsis !important",
                    color: "#000",
                  },
                },

                background: "#fff",
              }}
              id="standard-name"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={"What do you want to learn?"}
              InputProps={{
                startAdornment: (
                  <SearchIcon
                    fontSize="large"
                    sx={{
                      color: "#5c5c5e",
                      marginX: { xs: "6px", sm: "15px", md: "20px" },
                    }}
                  />
                ),
                endAdornment: (
                  <Button
                    sx={{
                      color: "#fff",
                      background: "#e7ca05",
                      paddingX: "40px",
                      marginRight: "-8px",
                      height: "55px",
                      fontSize: "18px",
                      borderRadius: "50px",
                      textTransform: "capitalize",
                      "&:hover": {
                        background: "#e7ca05",
                      },
                    }}
                  >
                    Search
                  </Button>
                ),
              }}
            />
          </Box>
        </Container>
      </Box>
      <Container>
        <Typography mt={5} variant="body1" fontWeight="700" color="#25272b">
          Filter by:
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <SearchField
            name="Learning Type"
            data={learning_type}
            setChipsArray={setAllCourses}
            allCourses={allCourses}
            setTagProps={setTagProps}
            tagProps={tagProps}
            index={0}
            clearAll={clearAll}
            setClearAll={setClearAll}
          />
          <SearchField
            name="Progress"
            data={progress}
            setChipsArray={setAllCourses}
            allCourses={allCourses}
            setTagProps={setTagProps}
            tagProps={tagProps}
            index={1}
            clearAll={clearAll}
            setClearAll={setClearAll}
          />
          <SearchField
            name="Categories"
            data={categories}
            setChipsArray={setAllCourses}
            allCourses={allCourses}
            setTagProps={setTagProps}
            tagProps={tagProps}
            index={2}
            clearAll={clearAll}
            setClearAll={setClearAll}
          />
          <SearchField
            name="Tags"
            data={tags}
            setChipsArray={setAllCourses}
            allCourses={allCourses}
            setTagProps={setTagProps}
            tagProps={tagProps}
            index={3}
            clearAll={clearAll}
            setClearAll={setClearAll}
          />
          <SearchField
            name="Difficulty"
            data={difficulty}
            setChipsArray={setAllCourses}
            allCourses={allCourses}
            setTagProps={setTagProps}
            tagProps={tagProps}
            index={4}
            clearAll={clearAll}
            setClearAll={setClearAll}
          />
        </Box>

        {(allCourses[0]?.length > 0 ||
          allCourses[1]?.length > 0 ||
          allCourses[2]?.length > 0 ||
          allCourses[3]?.length > 0 ||
          allCourses[4]?.length > 0) && (
          <>
            <Typography mt={5} variant="body1" fontWeight="700" color="#25272b">
              Showing All Results Related to
            </Typography>

            <Box mt={2} sx={{ display: "flex", gap: "5px" }}>
              {allCourses[0]?.map((option, index) => (
                <>
                  <Chip label={option?.title} {...tagProps["0"]({ index })} />
                </>
              ))}

              {allCourses[1]?.map((option, index) => (
                <>
                  <Chip label={option?.title} {...tagProps["1"]({ index })} />
                </>
              ))}

              {allCourses[2]?.map((option, index) => (
                <>
                  <Chip label={option?.title} {...tagProps["2"]({ index })} />
                </>
              ))}

              {allCourses[3]?.map((option, index) => (
                <>
                  <Chip label={option?.title} {...tagProps["3"]({ index })} />
                </>
              ))}

              {allCourses[4]?.map((option, index) => (
                <>
                  <Chip label={option?.title} {...tagProps["4"]({ index })} />
                </>
              ))}
              {(allCourses[0]?.length > 0 ||
                allCourses[1]?.length > 0 ||
                allCourses[2]?.length > 0 ||
                allCourses[3]?.length > 0 ||
                allCourses[4]?.length > 0) && (
                <Chip label="Clear All" onDelete={handleDelete} />
              )}
            </Box>
          </>
        )}
        <Typography mt={2} variant="body2">
          Explore Our Academy:
        </Typography>

        <Grid container justifyContent="center" spacing={3}>
          {cards.map(({ link, text, img }, i) => {
            return (
              <Grid item xs={6} md={4}>
                <Link to={link} style={{ textDecoration: "none" }}>
                  <Box
                    bgcolor={"#fff"}
                    m="auto"
                    my={2}
                    sx={{
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                  >
                    <img src={img} alt="" width="100%" />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#fff",
                        borderRadius: "0 50px 50px 0px",
                        background: "#840A9F",
                        py: "2px",
                        textAlign: "center",
                        width: "55%",
                        position: "relative",
                        mt: "-23px",
                        zIndex: 1,
                      }}
                    >
                      Course
                    </Typography>
                    <Container>
                      <Typography
                        variant="body2"
                        mt={3}
                        sx={{ fontWeight: "700" }}
                      >
                        {text}
                      </Typography>
                      <Typography variant="body2" color="#ac6061">
                        Published By Education Team
                      </Typography>
                      <Typography mt={2} variant="body2">
                        Beginner Level:
                      </Typography>

                      <Box sx={{ display: "flex" }}>
                        <Box
                          mt={1}
                          mb={3}
                          sx={{
                            width: "40px",
                            height: "5px",
                            background: "#c9dd02",
                            borderRadius: "5px",
                          }}
                        ></Box>
                        <Box
                          mt={1}
                          mb={3}
                          ml={1}
                          sx={{
                            width: "40px",
                            height: "5px",
                            background: "#E1DFE6",
                            borderRadius: "5px",
                          }}
                        ></Box>
                        <Box
                          ml={1}
                          mt={1}
                          mb={3}
                          sx={{
                            width: "40px",
                            height: "5px",
                            background: "#E1DFE6",
                            borderRadius: "5px",
                          }}
                        ></Box>
                      </Box>
                    </Container>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default MemberEductaion;
