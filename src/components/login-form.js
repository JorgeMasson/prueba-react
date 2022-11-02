import { useState } from "react";
import {
    Stack,
    Heading,
    Text,
    Input,
    InputRightElement,
    InputGroup,
    Flex,
} from "@chakra-ui/react";
import Button from "../platform/button";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgError, setMsgError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const handleClick = () => setShowPassword(!showPassword);

    return (
        <Stack mx="auto" as="form" background="white" px="70px" py="56px" w="600px">
            <Heading as="h3" size="lg" mb="48px" mx="auto">
                Log In
            </Heading>
            <Text>Email Address</Text>
            <Input
                rounded="none"
                mb="18px"
                h="44px"
                type="email"
                value={email}
                onChange={(e) => {
                    if (msgError !== "")
                        setMsgError("");
                    setEmail(e.target.value);
                }}
            />
            <Text>Password</Text>
            <InputGroup>
                <Input
                    rounded="none"
                    type={showPassword ? 'text' : 'password'}
                    h="44px"
                    onChange={(e) => {
                        if (msgError !== "")
                            setMsgError("");
                        setPassword(e.target.value)
                    }}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={() => handleClick()}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Text fontSize='sm' color='red.500'>{msgError}</Text>
            <Flex justify="center">
                <Button
                    isLoading={isLoading}
                    w="150px"
                    marginTop="48px !important"
                    onClick={async () => {
                        setIsLoading(true);
                        setIsLoading(false);
                    }}
                >
                    Log In
                </Button>
            </Flex>
        </Stack>
    );
}