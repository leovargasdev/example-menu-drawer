<h1 align="center">
  Exemplo menu drawer personalidado
</h1>

<p align="center">
  <img alt="Funcionamento do menu" src=".github/video.gif" />
</p>

## 💻 Projeto

Repositório para estudo das propriedades do menu drawer do [react navigation](https://reactnavigation.org/), mais especificamente voltado para a criação de um componente personalizado a partir da propriedade `drawerContent` do <Drawer.Navigator /> permitindo assim substituir o componente nativo.

Modificações que você verá neste projeto:

1. *Ícones*:  O componente `DrawerItem` na propriedade `label` permite carregar uma função que retorna um elemento react, desta maneira, pode-se carregar um item em forma de ícone.
 
2. *Orientações dos elementos:* No elemento nativo você não conseguiria alinhar os itens na vertical ou colocar itens com posições absolutas.
 
3. *Evento do item:* No componente `DrawerItem` também existe a propriedade `onPress` sendo possível executar uma função ao pressionar o item, pois no menu normal só era permitido links para as rotas do drawer.

Nota: Ao optar em usar a propriedade `drawerContent` todas as Screens não serão listadas, por isso deve ser importado o component <DrawerItemList /> para que o menu as reconheça.

## :rocket: Tecnologias

-  [Expo](https://expo.io/)
-  [Drawer Navigation](https://reactnavigation.org/docs/drawer-based-navigation)

## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone git@github.com:LeeonardoVargas/example-drawer.git && cd example-drawer
```
Agora basta instalar as dependências e executar o expo. Caso você não tenha o expo-cli instalado basta seguir esse [tutorial](https://expo.io/learn).

```bash
# Instalando as dependências
$ yarn

# Executanto aplicação
$ expo start

```