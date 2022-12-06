import { useState } from "react";
import { FlatList } from "react-native";

import { categories } from "../../mocks/categories"
import { Text } from "../Text";

import { Category, Icon } from "./styles";

export function Categories() {
const [selectedCategory, setSelectedCategory] = useState(" ")

  function handleSelectCategory(categoryId: string) {
    //verifica se a categoria selecionada é a mesma que ja esta seleciona, se for a mesma vai desativar a opacidade, se não for, vai mudar a opacidade
    const category = selectedCategory === categoryId ? "" : categoryId
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24}}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <Category onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>
                {category.icon}
              </Text>
            </Icon>
            <Text size={14} weight={"600"} opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Category>
        )
      }}
    />
  );
}
