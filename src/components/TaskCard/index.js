import {View, Text} from 'react-native';
import React from 'react';
import {
  Checkbox,
  CloseIcon,
  HStack,
  IconButton,
  Pressable,
  useColorMode,
} from 'native-base';


const TaskCard = (props) => {
  const {colorMode} = useColorMode();
  const bgColor = colorMode === 'dark' ? 'primary.800' : 'primary.200';
  const {
    item,
    handleCompletedItem,
    handleTaskCardPressed,
    handleDeleteTask,
    handleCloseModal,
  } = props;
  return (
    <Pressable onPress={() => handleTaskCardPressed(item)}>
      <HStack
        flexWrap={'wrap'}
        py={5}
        rounded="xl"
        bg={bgColor}
        px={5}
        mb={4}
        justifyContent="space-between"
        alignItems="center">
        <HStack space={2} alignItems="center" maxW={'80%'}>
          <Checkbox
            isChecked={item.completed}
            onChange={() => handleCompletedItem(item)}           
            accessibilityLabel="checkbox"
          />
          <Text>{item.text}</Text>
        </HStack>
        <IconButton
          rounded="full"
          variant="outline"
          size={8}
          justifyContent="center"
          alignItems="center"
          _icon={{size: '4'}}
          icon={<CloseIcon />}
          onPress={() => handleDeleteTask(item.id)}
        />

       
      </HStack>
    </Pressable>
  );
};

export default TaskCard;
