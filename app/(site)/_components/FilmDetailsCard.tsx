import Image from 'next/image'

interface FilmDetailsCardProps  {
  title      : string;
  director   : string;
  episode_id : number;
  image      : string;
}

const FilmDetailsCard = ({ title, director, episode_id, image }: FilmDetailsCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-fit mx-auto gap-4 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm py-4 px-6 rounded-lg">
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-4xl font-bold font-starjedi text-center">{title}</h1>
        <p className="font-bold text-2xl font-starjedi">Episode {episode_id}</p>
        <p className="text-xl">Directed by <span className="font-bold">{director}</span></p>
      </div>

      <Image
        src={image}
        width={204}
        height={301}
        priority
        alt="Film image"
      />
    </div>
  )
}

export default FilmDetailsCard