import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavigationHeader from '../components/NavigationHeader';
import Carousel from 'react-native-snap-carousel';
import automationIDs from '../utils/automationIDs';

class CarouselScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
          itemName: 'carousel_item_1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
          itemName: 'carousel_item_2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
          itemName: 'carousel_item_3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
          itemName: 'carousel_item_4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
          itemName: 'carousel_item_5',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        {...automationIDs(item.itemName)}
        style={{
          backgroundColor: '#fac241',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text {...automationIDs(item.title)} style={{fontSize: 30}}>
          {item.title}
        </Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <>
        <NavigationHeader title="Carousel" navigation={this.props.navigation} />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Carousel
            inactiveSlideOpacity={0.1}
            activeSlideOffset={50}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={700}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </>
    );
  }
}

export default CarouselScreen;
