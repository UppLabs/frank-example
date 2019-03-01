import React, { Component } from 'react';
import { TouchableOpacity,  Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Autocomplete from 'react-native-autocomplete-input';
import { Icon } from './Icon';

class AutocompleteInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        }
    }

    findData(query) {
        if(this.state.query === '') {
            return [];
        }

        return this.props.data.filter(x => x.name.indexOf(query) > -1);
    }

    isInvalid() {
        const { meta } = this.props;
        if(meta.touched && !meta.active && meta.error) {
        return (
            <Text style={styles.errorTextStyle} adjustsFontSizeToFit={true}>
            {meta.error}
            </Text>
        );
        }
        return null;
    }

    render() {
        const { containerStyle, listStyle, autocompleteContainerStyle } = styles;
        const { query } = this.state;
        const data = this.findData(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        const { iconType } = this.props;
        
        return (
            <View style={containerStyle}>
                <Icon name={iconType} />
                <Autocomplete
                    containerStyle={autocompleteContainerStyle}
                    listContainerStyle={listStyle}
                    listStyle={listStyle}
                    data={data.length === 1 && comp(query, data[0].name) ? [] : data}
                    defaultValue={query}
                    onChangeText={text => this.setState({ query: text })}
                    renderItem={item => (
                        <TouchableOpacity onPress={() => this.setState({ query: item.name })}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
                {this.isInvalid()}
            </View>
        );
    }
}

export { AutocompleteInput };

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
    },
    autocompleteContainerStyle: {
        flex: 1,
        height: 100,
    },
    // listStyle: {
    //     flex: 1,
    // },
}

AutocompleteInput.propTypes = {
    data: PropTypes.array.isRequired,
    input: PropTypes.object.isRequired,
    iconType: PropTypes.string
}