import React from 'react'
import { UseCharacterContext } from '../../context/getContext'

export default function CardList() {
  const { useCharacterContext } = UseCharacterContext()
  const { character } = useCharacterContext.data
  const { fetchSwitch, filteredCharacterData } = useCharacterContext;


  const characterList = (
    <>
      {character.map((item) => {
        return (
          <div className='e-cardList__container__card' key={item.id}>
            <div className='e-cardList__container__card__imageContainer'>
              <img alt={item.name} loading={'lazy'} src={item.image} />
            </div>
            <div className='e-cardList__container__card__info'>
              <div className={'e-cardList__container__card__info__status'}>
                <span
                  className={`e-cardList__container__card__info__status__${item.status}`}
                ></span>
              </div>
              <div className='e-cardList__container__card__info__label'>
                <label>
                  Name:
                  <span>{item.name}</span>
                </label>
              </div>
              <div className='e-cardList__container__card__info__label'>
                <label>
                  Gender:
                  <span>{item.gender}</span>
                </label>
              </div>
              <div className='e-cardList__container__card__info__label'>
                <label>
                  Specie:
                  <span>{item.species}</span>
                </label>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )

  const filteredCharacterList = (
    <>
      {filteredCharacterData?.filteredCharacterList?.map((item) => {
        return (
          <div className='e-cardList__container__card' key={item.id}>
            <div className='e-cardList__container__card__imageContainer'>
              <img alt={item.name} loading={'lazy'} src={item.image} />
            </div>
            <div className='e-cardList__container__card__info'>
              <div className={'e-cardList__container__card__info__status'}>
                <span
                  className={`e-cardList__container__card__info__status__${item.status}`}
                ></span>
              </div>
              <div className='e-cardList__container__card__info__label'>
                <label>
                  Name:
                  <span>{item.name}</span>
                </label>
              </div>
              <div className='e-cardList__container__card__info__label'>
                <label>
                  Gender:
                  <span>{item.gender}</span>
                </label>
              </div>
              <div className='e-cardList__container__card__info__label'>
                <label>
                  Specie:
                  <span>{item.species}</span>
                </label>
              </div>
            </div>
          </div>
        );
      })}

    </>
  )

  return (
    <section className='e-cardList'>
      <div className='e-cardList__container'>
        {!fetchSwitch.filteredMode ? characterList : filteredCharacterList}
      </div>
    </section>
  )
}
