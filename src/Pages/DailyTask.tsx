import React from 'react'
import styled from 'styled-components'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ToDoColumn } from './columns/ToDo';
import { InProgressColumn } from './columns/InProgress';
import { DoneColumn } from './columns/Done';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';

import { todoSlice as todo } from '../redux/slice/todo';
import { inProgressSlice as inProgress } from '../redux/slice/inProgress';
import { doneSlice as done } from '../redux/slice/done';
import StoreState from "../redux/store";
import { IModel } from '../types';

const HomeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`





// const Home: React.FunctionComponent = () => {
  type TAllSilces = 'todo' | 'inProgress' | 'done';

  function Daily() {
    const dispatch = useDispatch();
    const appState = useSelector((state: typeof StoreState) => state);
  
    const onDragEnd = (result: DropResult) => {
      if (!result.destination) {
        return;
      }
  
      const { destination, source, draggableId } = result;
      const allSlices = { todo, inProgress, done };
  
      if (destination.droppableId === source.droppableId) {
        dispatch(
          allSlices[destination.droppableId as TAllSilces].actions.reorder(result)
        );
      } else {
        const [filterState] = (
          (appState as any)[source.droppableId] as IModel[]
        ).filter(({ id }) => id === draggableId);
  
        dispatch(
          allSlices[source.droppableId as TAllSilces].actions.remove(draggableId)
        );
        dispatch(
          allSlices[destination.droppableId as TAllSilces].actions.update({
            ...result,
            filterState,
          })
        );
      }
    };
  
    return (
      <Container>
        <Typography textAlign='center' variant='h3' mt={3} mb={5}>
         Daily Work 
        </Typography>{' '}
        <Grid container spacing={3} justifyContent='center'>
          <DragDropContext onDragEnd={(res) => onDragEnd(res)}>
            <Grid item md={4}>
              <ToDoColumn />
            </Grid>
            <Grid item md={4}>
              <InProgressColumn />
            </Grid>
            <Grid item md={4}>
              <DoneColumn />
            </Grid>
          </DragDropContext>
        </Grid>
      </Container>
    );
  }
  
  export default Daily;