import { Exclude } from 'class-transformer'
import { Bcrypt } from 'src/utils/Bcrypt'
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column({
    unique: true,
  })
  email: string

  @Exclude()
  @Column()
  password: string

  @Column()
  updated_at: Date

  @BeforeInsert()
  updateUpdatedAt() {
    this.updated_at = new Date()
  }
}
