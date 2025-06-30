import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  useColorModeValue,
  Avatar,
  Flex,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import StoryCard from '../components/StoryCard';
import Sidebar from '../components/Sidebar';
import { FaPlus, FaBell, FaVolumeUp } from 'react-icons/fa';

export default function Subreddit() {
  const { subreddit } = useParams();
  const bg = useColorModeValue('#dae0e6', '#0b1426');
  const headerBg = useColorModeValue('white', '#1a1a1b');
  const borderColor = useColorModeValue('gray.200', '#343536');

  // Mock subreddit data
  const subredditData = {
    name: subreddit || 'nosleep',
    description: 'A place to share your original scary stories and experiences.',
    members: '15.2M',
    online: '12.4K',
    created: 'Created Jan 25, 2010',
    icon: '👻'
  };

  // Mock stories for this subreddit
  const mockStories = [
    {
      id: '1',
      title: 'I found a door in my basement that wasn\'t there yesterday',
      content: 'This happened three days ago, and I still can\'t wrap my head around it...',
      author: 'throwaway_scared123',
      subreddit: subredditData.name,
      upvotes: 2847,
      comments: 312,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
      isNarrated: true,
      audioUrl: '/audio/story1.mp3'
    }
  ];

  return (
    <Box bg={bg} minH="100vh" pt="60px">
      {/* Subreddit Header */}
      <Box
        bg={headerBg}
        borderBottom="1px solid"
        borderColor={borderColor}
        mb={6}
      >
        <Container maxW="1200px" py={6}>
          <VStack spacing={4} align="stretch">
            <HStack spacing={4}>
              <Avatar size="lg" name={subredditData.name} bg="orange.500">
                {subredditData.icon}
              </Avatar>
              <VStack align="flex-start" spacing={1} flex={1}>
                <HStack spacing={2}>
                  <Text fontSize="2xl" fontWeight="bold">
                    r/{subredditData.name}
                  </Text>
                  <Badge colorScheme="orange" variant="subtle">
                    <HStack spacing={1}>
                      <FaVolumeUp size={10} />
                      <Text fontSize="xs">AI Narration Available</Text>
                    </HStack>
                  </Badge>
                </HStack>
                <Text color="gray.500">{subredditData.description}</Text>
                <HStack spacing={4} fontSize="sm" color="gray.500">
                  <Text>{subredditData.members} members</Text>
                  <Text>•</Text>
                  <Text>{subredditData.online} online</Text>
                  <Text>•</Text>
                  <Text>{subredditData.created}</Text>
                </HStack>
              </VStack>
              <VStack spacing={2}>
                <Button colorScheme="orange" leftIcon={<FaPlus />}>
                  Join
                </Button>
                <Button variant="outline" leftIcon={<FaBell />} size="sm">
                  Notify
                </Button>
              </VStack>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Container maxW="1200px">
        <Flex gap={6}>
          {/* Main Content */}
          <Box flex={1}>
            <VStack spacing={4} align="stretch">
              {mockStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box w="300px" display={{ base: 'none', lg: 'block' }}>
            <Sidebar />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}