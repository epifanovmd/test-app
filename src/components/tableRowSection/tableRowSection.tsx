import React, {Component} from "react";
import "./styles.scss";
import {IData} from "../../modules/DataPage/dataPageState";

interface IProps {
  data: IData;
  setOpenName: (name: string) => void;
  removeCloseName: (name: string) => void;
}

interface IState {
  isOpen: boolean;
}

export class TableRowSection extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount(): void {
    const {setOpenName, data: {name}} = this.props;
    setOpenName(name);
  }

  componentWillUnmount(): void {
    const {removeCloseName, data: {name}} = this.props;
    removeCloseName(name);
  }

  render(): JSX.Element {
    const {data: {name, listChild}, setOpenName, removeCloseName} = this.props;
    const {isOpen} = this.state;

    return (
      <div className="tableRowSection">
        {listChild.length > 0 ?
          <div className="tableRowSection__name" onClick={this.toggleOpenSection}>
            {name}
          </div> :
          <div className="tableRowSection__name">
            {name}
          </div>
        }
        {
          isOpen &&
          listChild.map((item, index) => (
            <TableRowSection removeCloseName={removeCloseName} setOpenName={setOpenName} key={index} data={item} />
          ))
        }
      </div>
    );
  }

  private toggleOpenSection = () => {
    this.setState((state: IState) => ({isOpen: !state.isOpen}));
  };
}
