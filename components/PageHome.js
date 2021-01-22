import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';

var filterOne = ["Western Cape", "Eastern Cape", "Northern Cape", "Gauteng", "Mpumalanga", "Free State", "Limpopo"];
var filter1Var = 0;
var filterTwo = ["Civil Engineering", "Accomodation", "Transport", "etc"];
var filter2Var = 0;

function moreInfo(props){
};

function TenderItem(props) {
    return (
        <View>
            <View style={ styles.item}>
                <View style={styles.line1}>
                    <Text style={{alignSelf: 'flex-end'}}>{props.line1}:</Text>
                </View>
                <View style={styles.line2}>
                    <Text>{props.line2}</Text>
                </View>
                <TouchableOpacity
                    style={styles.infoButton}
                    onPress={moreInfo}
                >
                    <Text>MORE INFO</Text>
                </TouchableOpacity>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
            </View>
        </View>
        );
}

class PageHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter1: filterOne[0],
            filter2: filterTwo[0],
        }
    }

    back1 = () => {
        if (filter1Var == 0) {
            filter1Var = filterOne.length-1;
        }
        else {
            filter1Var -= 1;
        }
        this.setState({ filter1: filterOne[filter1Var] });
    };

    back2 = () => {
        if (filter2Var == 0) {
            filter2Var = filterTwo.length - 1;
        }
        else {
            filter2Var -= 1;
        }
        this.setState({ filter2: filterTwo[filter2Var] });
    };

    forward1 = () => {
        if (filter1Var == (filterOne.length-1)) {
            filter1Var = 0;
        }
        else {
            filter1Var += 1;
        }
        this.setState({ filter1: filterOne[filter1Var] });
    };

    forward2 = () => {
        if (filter2Var == (filterTwo.length - 1)) {
            filter2Var = 0;
        }
        else {
            filter2Var += 1;
        }
        this.setState({ filter2: filterTwo[filter2Var] });
    };

    render() {
        if (this.props.page != 'home') {
            return null;
        }
        else {
            return (
                <View style={{flex: 1}}>
                    <View style={styles.header}>
                        <View style={styles.searchRow}>
                            <TouchableOpacity
                                onPress={this.back1}
                            >
                                <Text>back</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.searchRow, { width: 300 , justifyContent: 'center'}]}>
                            <Text>{ this.state.filter1}</Text>
                        </View>
                        <View style={styles.searchRow}>
                            <TouchableOpacity
                                onPress={this.forward1}
                            >
                                <Text>forward</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.header}>
                        <View style={styles.searchRow}>
                            <TouchableOpacity
                                onPress={this.back2}
                            >
                                <Text>back</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.searchRow, { width: 300, justifyContent: 'center' }]}>
                            <Text>{this.state.filter2}</Text>
                        </View>
                        <View style={styles.searchRow}>
                            <TouchableOpacity
                                onPress={this.forward2}
                            >
                                <Text>forward</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={styles.body} contentContainerStyle={{ flexGrow: 1, padding: 32 }}>
                        <TenderItem line1={'Knysna'} line2={'Rental of office accomodation for a period of 5 years.'}/>
                        <TenderItem line1={'Oudtshoorn'} line2={'Provision for the leasing of office accommodation.'} />
                        <TenderItem line1={'Bergriver'} line2={'Proposal for the provision of student accommodation.'} />

                        <TenderItem line1={'Knysna'} line2={'Rental of office accomodation for a period of 5 years.'} />
                        <TenderItem line1={'Oudtshoorn'} line2={'Provision for the leasing of office accommodation.'} />
                        <TenderItem line1={'Bergriver'} line2={'Proposal for the provision of student accommodation.'} />

                        <TenderItem line1={'Knysna'} line2={'Rental of office accomodation for a period of 5 years.'} />
                        <TenderItem line1={'Oudtshoorn'} line2={'Provision for the leasing of office accommodation.'} />
                        <TenderItem line1={'Bergriver'} line2={'Proposal for the provision of student accommodation.'} />
                    </ScrollView>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',

    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        padding: 32,
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-between',
        backgroundColor: 'lightgrey',
    },
    item: {
        padding: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'lightgrey',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    button: {
        padding: 32,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'lightblue',
    },
    line1: {
        padding: 32,
        flex: 1,
        alignSelf: 'center',
    },
    line2: {
        padding: 32,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'grey',
        flex: 3,
    },
    button: {
        flex: 3,
    },
    infoButton: {
        height: 50,
        padding: 12,
        marginLeft: 12,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    logo: {
        padding: 50,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    searchRow: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    search: {
        padding: 20,
        justifyContent: 'center',
        width: 250,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    searchBar: {
        textAlign: 'left',
        padding: 32,
        width: 250,
        height: 60,
        backgroundColor: 'white',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'grey',
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: 'grey',
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default PageHome;