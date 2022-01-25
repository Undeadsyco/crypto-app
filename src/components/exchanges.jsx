import { Col, Collapse, Row, Typography, Avatar } from "antd";
import millify from "millify";
import HTMLReactParser from "html-react-parser";

import { useGetCryptoExchangesQuery } from "../services/cryptoApi";
import Loader from './loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = props => {
  const { data, isFetching } = useGetCryptoExchangesQuery()
  const exchangeList = data?.data?.exchanges
  
  if(isFetching) return <Loader />

  return (
    <>
      <Row>
        <Col span={6} >Exchanges</Col>
        <Col span={6} >24h Trade Volume</Col>
        <Col span={6} >Markets</Col>
        <Col span={6} >Change</Col>
      </Row>
      <Row>
        {exchangeList?.map(exchange => (
          <Col span={24} key={Math.random()}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={(
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}</strong></Text>
                      <Avatar className='exchange-image' src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6} >{millify(exchange.volume)}</Col>
                    <Col span={6} >{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6} >{millify(exchange.marketShare)}</Col>
                  </Row>
                )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Exchanges;