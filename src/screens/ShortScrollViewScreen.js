import React, {Component} from 'react';
import {View} from 'react-native';

import {globalStyles} from '../sheet/index';

import NavigationHeader from '../components/NavigationHeader';
import TextScrollView from '../components/TextScrollView';

const tab = '\t\t';
const mainText = `
${tab}Bash is the GNU Project's shell—the Bourne Again SHell. This is an sh-compatible shell that incorporates useful features from the Korn shell (ksh) and the C shell (csh). It is intended to conform to the IEEE POSIX P1003.2/ISO 9945.2 Shell and Tools standard. It offers functional improvements over sh for both programming and interactive use. In addition, most sh scripts can be run by Bash without modification.

${tab}The improvements offered by Bash include:

${tab}* command-line editing;
${tab}* unlimited size command history;
${tab}* job control;
${tab}* shell functions and aliases;
${tab}* indexed arrays of unlimited size;
${tab}* integer arithmetic in any base from two to sixty-four;

${tab}Documentation for Bash is available online, as is documentation for most GNU software. You may also find information about Bash by running info bash or man bash.
`;

class ShortScrollViewScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavigationHeader
          title="Short Scroll View"
          navigation={this.props.navigation}
        />
        <View style={globalStyles.centredView}>
          <TextScrollView headerText={'GNU Bash'} bodyText={mainText} />
        </View>
      </>
    );
  }
}

export default ShortScrollViewScreen;
