import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import NavigationHeader from '../components/NavigationHeader';
import {Text} from 'react-native-elements';

const tab = '\t\t\t\t';
const mainText = `
${tab}Java is an object-oriented programming language developed by James Gosling and colleagues at Sun Microsystems in the early 1990s. Unlike conventional languages which are generally designed either to be compiled to native (machine) code, or to be interpreted from source code at runtime, Java is intended to be compiled to a bytecode, which is then run (generally using JIT compilation) by a Java Virtual Machine.

${tab}The language itself borrows much syntax from C and C++ but has a simpler object model and fewer low-level facilities. Java is only distantly related to JavaScript, though they have similar names and share a C-like syntax.

${tab}There were five primary goals in the creation of the Java language:
${tab}1. It should use the object-oriented programming methodology.
${tab}2. It should allow the same program to be executed on multiple operating systems.
${tab}3. It should contain built-in support for using computer networks.
${tab}4. It should be designed to execute code from remote sources securely.
${tab}5. It should be easy to use by selecting what was considered the good parts of other object-oriented languages.

${tab}To achieve the goals of networking support and remote code execution, Java programmers sometimes find it necessary to use extensions such as CORBA, Internet Communications Engine, or OSGi.

${tab}The Java Runtime Environment or JRE is the software required to run any application deployed on the Java Platform. End-users commonly use a JRE in software packages and Web browser plugins. Sun also distributes a superset of the JRE called the Java 2 SDK (more commonly known as the JDK), which includes development tools such as the Java compiler, Javadoc, and debugger.
`;

class ScrollViewScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavigationHeader
          title="Scroll View"
          navigation={this.props.navigation}
        />
        <View style={styles.view}>
          <ScrollView>
            <Text
              style={{...styles.textMarker, marginTop: '10%'}}
              h3
              testID="history-start-testID"
              accessibilityLabel="history-start-accessibilityLabel">
              Java history start
            </Text>
            <Text style={styles.mainText}>{mainText}</Text>
            <Text
              style={{...styles.textMarker, marginBottom: '15%'}}
              h3
              testID="history-end-testID"
              accessibilityLabel="history-end-accessibilityLabel">
              Java history end
            </Text>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMarker: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  mainText: {
    fontSize: 22,
    fontStyle: 'italic',
    letterSpacing: 3,
  },
});

export default ScrollViewScreen;
