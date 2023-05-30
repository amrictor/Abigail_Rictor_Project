import React from 'react';
import { CharacterType } from 'types';
import * as styles from './styles';

import { FaRulerVertical as HeightIcon } from 'react-icons/fa';
import { MdFace3 as HairIcon } from 'react-icons/md';
import { AiTwotoneHeart as SpouseIcon } from 'react-icons/ai';
import { TbWorld as RealmIcon } from 'react-icons/tb';
import { formatText } from 'utils/format';

function CharacterInfo({ character } : { character: CharacterType}) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.identity}>
        <div>
          <div className={styles.name}>{character.name}</div>
          {character.spouse && <div className={styles.inline}><SpouseIcon/> {!character.spouse.includes("Loved") &&"Married to "}{formatText(character.spouse)}</div>}
          {character.hair && <div className={styles.inline}><HairIcon/>{character.hair} hair</div>}
          {character.height && <div className={styles.inline}><HeightIcon/>{character.height}</div>}
        </div>
        <div className={styles.traits}>
          {character.race} {character.gender}
          {character.realm && <div className={styles.realm}><RealmIcon/>{character.realm}</div>}
        </div>
      </div>
      <div className={styles.summary}>
        <div>
          {(character.birth && character.death) && <div>Lived from {formatText(character.birth)} to {formatText(character.death)}</div>}
          {(character.birth && !character.death) && <div>Born {formatText(character.birth)}</div>}
          {(!character.birth && character.death) && <div>Died {formatText(character.death)}</div>}
        </div>
        <a href={character.wikiUrl}>Learn more</a>
      </div>
     
      

    
      
    </div>
  );
}

export default CharacterInfo;
