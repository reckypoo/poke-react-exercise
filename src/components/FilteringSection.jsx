import {
    Row,
    Col,
    Select,
    List,
    Card
} from 'antd' //documentation found at https://ant.design/components/overview/
import InfiniteScroll from 'react-infinite-scroll-component'
import {getPokemon} from '../providers/poke-tools/pokeTools'
import React, {useState} from 'react'

export class FilteringSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedType: null,

        }
        //Bind Component Functions
        this.handleTypeChange = this.handleTypeChange.bind(this);

    }   

    componentDidUpdate(){
        console.log("Component did Update")

    }
    

    handleTypeChange(event){
        console.log(event)
        this.setState({
            selectedType: event,
        })
    }
    render(){
        const listItems = getPokemon().filter(element => element.type1 === this.state.selectedType)
        const pokeTypes = [null, 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark','Dragon','Steel','Fairy']
        const selectOptions = [];
        const pokeTypesArr = pokeTypes.forEach((type)=>{
            selectOptions.push({value: type, label: type})
        })
        return (
            <Row gutter={[0, 32]}>

                {/* Filter by Type */}
                <Col xs={24} xl={12} xxl={8}  style={{paddingLeft: '48px', paddingRight: '48px'}}>
                    <Card title="Filter Pokémon by Type 1" extra={<Select onChange={this.handleTypeChange} options={selectOptions} placeholder="Select Type 1" />}>
                        <div
                            id="scrollableDiv"
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                                marginLeft: '0px',
                                marginRight: '0px',
                                height: 400,
                                overflow: 'auto',
                                paddingTop: '0px',
                                paddingBottom: '0px',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                border: '1px solid rgba(140, 140, 140, 0.35)',
                            }}
                        >
                            <InfiniteScroll
                                dataLength={listItems.length}
                            >
                                <List
                                    dataSource={listItems}
                                    size="small"
                                    renderItem={(item) => {
                                        return (
                                            <List.Item
                                                key={item.number}
                                                style={{paddingTop: '1px', paddingBottom: '1px', paddingRight: '16px', paddingLeft: '16px'}}
                                            >
                                                <span style={{display: 'inline-block', marginRight: "10px", width: '28px', textAlign: "right"}}>#{item.number}</span> {item.name}
                                            </List.Item>
                                        )
                                    }}
                                />
                            </InfiniteScroll>
                        </div>
                    </Card>
                </Col>

                {/* Filter by Generation */}
                <Col xs={24} xl={12} xxl={8} style={{ppaddingLeft: '48px', paddingRight: '48px'}}></Col>

                {/* List of union between two filters */}
                <Col xs={24} xxl={8} style={{paddingLeft: '48px', paddingRight: '48px'}}></Col>
            </Row>
        )
    }
 
}