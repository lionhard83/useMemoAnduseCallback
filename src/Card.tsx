type CardProps = {
    id: string;
    image?: string;
    name: string;
    paragraph500: string;
    paragraph900: string;

}

export const Card = ({id, image, name, paragraph500, paragraph900}: CardProps) => {
    return <div key={id} className="group relative">
    {image && <img
      alt={image}
      src={image}
      className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
    />}
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href={''}>
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{paragraph500}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">{paragraph900}</p>
    </div>
  </div>
}