import {
  Box,
  Button,
  Input,
  Checkbox,
  Link,
  Divider,
  Text,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/core";
import { FormEvent } from "react";
import { FaApple, FaFacebook, FaSpotify } from "react-icons/fa";

function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

export default function Home() {
  return (
    <>
      <Flex
        textAlign="center"
        pb={8}
        pt={6}
        justifyContent="center"
        flexDirection="column"
      >
        <Heading
          as={Link}
          href="//github.com/chakra-ui/chakra-ui/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            d="inline-block"
            src="//raw.githubusercontent.com/chakra-ui/chakra-ui/develop/logo/logo-colored.svg"
            alt="chakra logo"
            ignoreFallback
            width="200px"
            height="66px"
            ml="auto"
            mr="auto"
          />

          <Box
            as={FaSpotify}
            d="inline-block"
            ml={4}
            height="52px"
            width="52px"
          />

          <Text d="inline-block" ml={4} color="gray.700" verticalAlign="middle">
            Login Clone
          </Text>
        </Heading>
      </Flex>

      <Divider />

      <Box maxWidth="450px" ml="auto" mr="auto" mt={6}>
        <Text fontWeight="bold" textAlign="center" mb={3}>
          To continue, log in to Spotify.
        </Text>

        <Link
          as={Button}
          d="flex"
          color="white"
          width="100%"
          textTransform="uppercase"
          borderRadius={100}
          height={12}
          mb="10px"
          bgColor="facebook.500"
          _hover={{ bgColor: "facebook.400" }}
        >
          <Box as={FaFacebook} d="inline" mr={14} />
          continue with facebook
        </Link>
        <Link
          as={Button}
          d="flex"
          color="white"
          width="100%"
          textTransform="uppercase"
          borderRadius={100}
          height={12}
          bgColor="black"
          _hover={{ bgColor: "gray.800" }}
        >
          <Box as={FaApple} d="inline" mr={14} />
          continue with apple
        </Link>

        <Flex mt={4} alignItems="center">
          <Divider
            aria-label={undefined}
            role={undefined}
            border="1px solid"
            borderColor="gray.200"
          />
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            px={4}
            fontSize="xs"
          >
            or
          </Text>
          <Divider
            aria-label={undefined}
            role={undefined}
            border="1px solid"
            borderColor="gray.200"
          />
        </Flex>

        <form onSubmit={onSubmit}>
          <Input
            type="email"
            placeholder="Email address or username"
            borderRadius={0}
            mt={3}
          />

          <Input
            type="password"
            placeholder="Password"
            borderRadius={0}
            mt={3}
          />

          <Flex mt={5} justifyContent="space-between">
            <Checkbox colorScheme="green" size="lg" defaultIsChecked>
              <Text fontSize="md" color="gray.400">
                Remember me
              </Text>
            </Checkbox>

            <Button
              type="submit"
              bgColor="green.400"
              color="white"
              _hover={{ bgColor: "green.300" }}
              textTransform="uppercase"
              borderRadius={100}
              width="50%"
              height={12}
            >
              log in
            </Button>
          </Flex>
        </form>

        <Box textAlign="center" mt={4} mb={8}>
          <Link
            color="green.400"
            _hover={{ color: "green.300", textDecoration: "none" }}
          >
            Forgot your password?
          </Link>
        </Box>

        <Divider aria-label={undefined} role={undefined} />

        <Box textAlign="center" mt={8}>
          <Text fontWeight="bold" fontSize="18px" mb={6}>
            Don't have an account?
          </Text>

          <Button
            as={Link}
            variant="outline"
            borderRadius={100}
            width="100%"
            textTransform="uppercase"
            borderColor="gray.900"
            _hover={{
              textDecoration: "none",
              bgColor: "gray.800",
              color: "white",
            }}
            height={12}
          >
            sign up for spotify
          </Button>
        </Box>

        <Divider aria-label={undefined} role={undefined} mt={25} mb={15} />

        <Text fontSize="0.7rem" textAlign="center" color="gray.400" mb={4}>
          If you click on "Log in with Facebook" and are not a Spotify user, you
          will be registered and you agree to nobodys{" "}
          <Link
            color="green.400"
            _hover={{ color: "green.300", textDecoration: "none" }}
          >
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            color="green.400"
            _hover={{ color: "green.300", textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          .
        </Text>
      </Box>
    </>
  );
}
