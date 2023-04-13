import type { IGeneratorFaktum } from "~/models/faktum.server";
import type { IFaktum } from "../Faktum";
import { FaktumComponent } from "../Faktum";
import styles from "./FaktumGenerator.module.css";

export function FaktumGenerator(props: IFaktum<IGeneratorFaktum>) {
  switch (props.faktum.beskrivendeId) {
    default:
      return <StandardGenerator {...props} />;
  }
}

function StandardGenerator({ faktum }: IFaktum<IGeneratorFaktum>) {
  return (
    <div>
      {faktum?.svar?.map((fakta) => {
        return (
          <div key={faktum.id} className={styles.generatorReadOnlyCard}>
            {fakta.map((faktum) => (
              <FaktumComponent key={faktum.id} faktum={faktum} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
