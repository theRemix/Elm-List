import Html exposing (li, text, ul)
import Html.Attributes exposing (class)

chiptuneArtists : List String
chiptuneArtists =
  [ "Sabrepulse"
  , "Pixelh8"
  , "Big Giant Circles"
  ]


toListItem x = li [] [ Html.text x ]

main =
  ul [class "artists"]
    ( List.map toListItem chiptuneArtists )
