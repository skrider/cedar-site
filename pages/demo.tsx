import React, {useState, useMemo, useCallback} from 'react';
import { 
  GridContainer,
  DoubleGridContainer,
  DumbGridTile
} from '../styles/pages/demo';

type GridTileState = {
  current: boolean;
}


type GridModel = {  
  [day: string]: {
    [time: string]: GridTileState
  }
}

type GridTileProps = {
  onUserToggle: () => boolean;
  onUserClick: () => boolean;
  toggleRef: GridTileState
}

const SmartGridTile : React.FC<GridTileProps> = ({
  onUserToggle, 
  onUserClick,
  toggleRef
}) => {
  const [isToggled, setIsToggled] = React.useState(toggleRef.current);
  
  return (
    <DumbGridTile
      toggled={isToggled}
      onDragStart={(e) => {
        setIsToggled(onUserToggle())
        e.preventDefault();
        e.stopPropagation();
      }}
      onMouseEnter={() => {
        setIsToggled(onUserToggle())
      }}
      onMouseDown={() => {
        setIsToggled(onUserClick())
      }}
    />
  )
}

type GridProps = {
  days: string[]
  timeStart: number;
  timeEnd: number;
  timeIncrement: number;
}

const Grid : React.FC<GridProps> = ({days, timeStart, timeEnd, timeIncrement}) => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  let [settingTo, setSettingTo] = useState<boolean>(true);

  const timeArray : number[] = useMemo(() => {
    let arr = [timeStart];
    while (arr[arr.length - 1] <= timeEnd - timeIncrement) {
      arr.push(arr[arr.length - 1] + timeIncrement);
    }
    return arr;
  }, [timeStart, timeEnd, timeIncrement])

  const [gridModel, setGridModel] = useState<GridModel>(
    days.reduce((map : Record<string, Record<string, GridTileState>>, day) => {
      map[day] = timeArray.reduce((timeMap : Record<string, GridTileState>, time) => {
        timeMap[`${time}`] = {
          current: false
        };
        return timeMap;
      }, {});
      return map;
    }, {})
  )

  const toggleGridLocation = useCallback((day : string, time : string) => {
    gridModel[day] = {
      ...gridModel[day],
      [time]: {
        current: settingTo
      }
    }
    return gridModel[day][time].current;
  }, [settingTo])
  
  return (
    <DoubleGridContainer
      draggable={false}
    >
      <GridContainer
        draggable={false}
        rows={timeArray.length + 1}
        columns={days.length + 1}
        onMouseUp={() => {
          setIsMouseDown(false);
          setGridModel(gridModel);
        }}
      >
        {timeArray.map((time, index) => (
          <p
            key={`time-${index}`}
          >
            {time}
          </p>
        ))}
        {Object.entries(gridModel).map(([day, times]) => (
          [(
            <p
              key={`${day}-header`}
            >
              {day}
            </p>
          )].concat(Object.entries(times).map(([time, value], index) => (
            <SmartGridTile 
              onUserToggle={isMouseDown ? () => toggleGridLocation(day, time) : () => value.current}
              onUserClick={() => {
                setIsMouseDown(true);
                settingTo = !value.current;
                setSettingTo(settingTo);
                return toggleGridLocation(day, time);
              }}
              toggleRef={value}
              key={`${day}-${index}`}
            />
          )))
        ))}
      </GridContainer>
      <GridContainer
        rows={timeArray.length + 1}
        columns={days.length + 1}      
      >
        {timeArray.map((time, index) => (
          <p
            key={`time-${index}`}
          >
            {time}
          </p>
        ))}
        {Object.entries(gridModel).map(([day, times]) => (
          [(
            <p
              key={`${day}-header`}
            >
              {day}
            </p>
          )].concat(Object.entries(times).map(([time, {current}], index) => (
            <DumbGridTile 
              toggled={current}
              key={`${day}-${index}`}
            />
          )))
        ))}
      </GridContainer>
    </DoubleGridContainer>
  )
}

const Demo : React.FC = () => {
  return (
    <Grid 
      days={['sun', 'mon', 'tue', 'wed', 'thu', 'fri']}
      timeStart={600}
      timeEnd={1800}
      timeIncrement={50}
    />
  )
}

export default Demo;
