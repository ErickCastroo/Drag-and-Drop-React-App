import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Usuario({ usuario }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ 
    id: usuario.id
  });

  const estilo = {
    transform: CSS.Transform.toString(transform),
    transition
  };

    return (
    <div 
      style={estilo}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className='bg-white p-4 rounded-md shadow-md text-black my-4 flex items-center'
    >
      <img src={usuario.img} alt={usuario.nombre} className="w-32 h-32 object-cover rounded-full mr-4" />
      <div>
        <h1 className='text-2xl'>{usuario.nombre}</h1>
      </div>
    </div>
  );
}


export default Usuario;
