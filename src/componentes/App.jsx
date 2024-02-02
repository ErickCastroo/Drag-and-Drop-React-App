import React, { useEffect } from 'react';
import Usuario from './Usuario';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import '../css/index.css';
import { usePersonas } from '../js/datos'; 


function App() {

  const [personas, setPersonas] = usePersonas(); 

  useEffect(() => {
    const acomodoGuardado = localStorage.getItem('acomodo');

    if (acomodoGuardado) {
      setPersonas(JSON.parse(acomodoGuardado));
    }
  }, [setPersonas]);

 

    const handleDrag = (evento) => {
    const { active, over } = evento;

    setPersonas((personas) => {
      const viejoIndex = personas.findIndex((persona) => persona.id === active.id);
      const nuevoIndex = personas.findIndex((persona) => persona.id === over.id);

      const nuevasPersonas = arrayMove(personas, viejoIndex, nuevoIndex);

      localStorage.setItem('acomodo', JSON.stringify(nuevasPersonas)); 

      return nuevasPersonas;
    });
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='w-4/6'>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDrag}>
          <h1 className='text-2xl font-bold text-center p-4'>⭐ Ranquea tus animes favoritos ⭐ </h1>
          <SortableContext items={personas} strategy={verticalListSortingStrategy}>
            {personas.map((usuario) => (
              <Usuario key={usuario.id} usuario={usuario} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default App;